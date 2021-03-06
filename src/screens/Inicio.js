import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, AsyncStorage, Alert } from 'react-native';
import { db } from '../config';
let salasRef = db.ref('salas/');
import BotaoNovaSala from '../components/BotaoNovaSala';
import styles from '../styles/estilos';
import SemSalas from '../containers/SemSalas';
import CardSalaVotacao from '../components/CardSalaVotacao';
import Barra from '../components/Barra';
import getStatus from '../utils/getStatus';

export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salas: [],
      souAdm: false
    }
  }
  static navigationOptions = {
    title: 'Votações disponíveis',
  };


  componentWillMount() {
    salasRef.orderByChild("uid").on('value', snapshot => {
      let salas = snapshot.val();
      AsyncStorage.getItem('@UID').then(uid => {
        if (salas != null) {
          salas = Object.values(salas);
          salas = salas.filter(sala => {
            if(sala.adm_uid === uid){
              return true;
            }
            if(sala.votantes){
              return [...sala.votantes].filter(v => v.uid === uid).length;
            }
          });
          this.setState(() => ({
            salas, uid
          }))
        }
      },
      error => console.log('Erro ao carregar as salas.', error));
    });
  }

  podeVotar = (item, indice) => {
    const { uid } = this.state;
    const { questoes } = item;
    let result = true;
    //se já votou retorna false
    questoes.map((questao, index) => {
      let { alternativas } = questao;
      alternativas.forEach(element => {
        if(element && element[2]) {
          result = !(element[2].filter(id => id === uid).length);
          return result;
        }
      });
    });
    if(result)
      return true;
    else 
      return false;
  }

  handleVisualizar = (item, index) => {
    const { uid, salas } = this.state
    if (item){
      if(uid && item.adm_uid === uid){
        return this.props.navigation.navigate('Andamento', { 'sala': item });
      }
      if(this.podeVotar(item, index))
        this.props.navigation.navigate('Votacao', { 'sala': item, 'salas': salas, 'indiceSala': index });
      else 
      return Alert.alert(
                '⚠️ Aviso:',
                'Você já votou nesta sala!',
                [
                  {text: 'OK'},
                ]
              );
    } else {
      this.props.navigation.navigate('Votacao', { 'sala': item, 'salas': salas, 'indiceSala': index });
    }
  }

  handleSelect = selected => {
    this.setState({ selected });
  }

  getHistorico = salas => salas.filter(item => {
      const {dataFinal, dataInicial, horaFinal, horaInicial } = item;
      return getStatus(dataFinal, dataInicial, horaFinal, horaInicial, false) == 'encerrada';
  })

  render() {
    const { salas } = this.state;
    const { height } = Dimensions.get('screen');
    const disponibleRooms = salas.filter((item, index) =>
      (getStatus(item.dataFinal,
        item.dataInicial, item.horaFinal,
        item.horaInicial)) != 'encerrada');
    return (
      <View style={[styles.container, { height: height }]}>
        <ScrollView style={{ maxHeight: height - 240, marginBottom: 5 }}>
          <View>
            {
              disponibleRooms.length > 0 ?
              disponibleRooms.map((item, index) =>
                  <CardSalaVotacao
                    key={index}
                    onPress={() => this.handleVisualizar(item, index)}
                    status={getStatus(item.dataFinal,
                      item.dataInicial, item.horaFinal,
                      item.horaInicial)}
                    mensagem={getStatus(item.dataFinal,
                      item.dataInicial, item.horaFinal,
                      item.horaInicial, true)}
                    titulo={item.titulo}
                  />
                )

                :
                <SemSalas
                  texto="No momento você não possui salas de votação disponíveis!"
                />
            }
          </View>

        </ScrollView>
        <BotaoNovaSala
          color='#10C500'
          endereco='Sala'
          navigation={this.props.navigation}
        />
        <Barra
          index={false}
          onPress={() => this.props.navigation.navigate('Historico', {'salas': this.getHistorico(salas)})}
        />
      </View>
    );
  }
}