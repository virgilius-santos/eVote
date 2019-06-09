import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { db } from '../config';
let salasRef = db.ref('salas/');
import styles from '../styles/estilos';
import SemSalas from '../containers/SemSalas';
import CardSalaVotacao from '../components/CardSalaVotacao';
import Barra from '../components/Barra';
import moment from 'moment'; 

class Historico extends Component {  
  constructor(props) {
    super(props) 
    this.state = {
      salas: {}
    }
  }
  static navigationOptions = {
    title: 'Histórico de Votações',
  };

  handleVisualizar = (item) => {
    if (item)
      this.props.navigation.navigate('Andamento', { 'sala': item, 'encerrou': true });
    else
      this.props.navigation.navigate('Andamento', { 'sala': 'Não disponível' });
  }

  componentWillMount() {
    salasRef.orderByChild("uid").on('value', snapshot => {
      let salas = snapshot.val();

      if (salas != null) {
        salas = Object.values(salas);
        this.setState(() => ({
          salas
        }))
      }
    });
  }

  getStatus = (dataFinal, dataInicial, horaFinal, horaInicial, informacaoExtra) => {
    let firstMoment = moment(`${dataInicial} ${horaInicial}`, 'DD/MM/YYYY HH:mm');
    let finalMoment = moment(`${dataFinal} ${horaFinal}`, 'DD/MM/YYYY HH:mm');
    let nowMoment   = moment();

    if(!(firstMoment.diff(nowMoment)>0) && !(finalMoment.diff(nowMoment)>=0)) {
      return informacaoExtra? finalMoment.format('DD/MM/YYYY HH:mm') : 'encerrada';
    }
  }

  render() {
    const { salas } = this.state;
    const { height } = Dimensions.get('screen');
    return (
      <View style={[styles.container, { height: height }]}>
        <ScrollView style={{ maxHeight: height - 160, marginBottom: 5 }}>
          <View>
            {
              salas.length > 0 ?
                salas.map((item, index) =>
                (this.getStatus(item.dataFinal,
                  item.dataInicial, item.horaFinal,
                  item.horaInicial, false)) == 'encerrada'?
                  <CardSalaVotacao
                    key={index}
                    onPress={() => this.handleVisualizar(item)}
                    status={this.getStatus(item.dataFinal,
                      item.dataInicial, item.horaFinal,
                      item.horaInicial)}
                      mensagem={this.getStatus(item.dataFinal,
                      item.dataInicial, item.horaFinal,
                      item.horaInicial, true)}
                    titulo={item.titulo}
                  />:
                  null
                )
                :
                <SemSalas
                  texto="Você não participou de votações prévias."
                />
            }
          </View>

        </ScrollView>
        <Barra
          index={true}
          onPress={() => this.props.navigation.navigate('Inicio')}
        />
      </View>
    );
  }
}
export default Historico;
