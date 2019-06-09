import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
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
      salas: []
    }
  }
  static navigationOptions = {
    title: 'Votações disponíveis',
  };
 

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

  handleVisualizar = (item) => {
    if (item)
      this.props.navigation.navigate('Votacao', { 'sala': item });
    else
      this.props.navigation.navigate('Votacao', { 'sala': 'Não disponível' });
  }

  render() {
    const { salas } = this.state;
    const { height } = Dimensions.get('screen');
    return (
      <View style={[styles.container, { height: height }]}>
        <ScrollView style={{ maxHeight: height - 240, marginBottom: 5 }}>
          <View>
            {
              salas.length > 0 ?
                salas.map((item, index) =>
                (getStatus(item.dataFinal,
                  item.dataInicial, item.horaFinal,
                  item.horaInicial)) != 'encerrada'?
                  <CardSalaVotacao
                    key={index}
                    onPress={() => this.handleVisualizar(item)}
                    status={getStatus(item.dataFinal,
                      item.dataInicial, item.horaFinal,
                      item.horaInicial)}
                    mensagem={getStatus(item.dataFinal,
                      item.dataInicial, item.horaFinal,
                      item.horaInicial, true)}
                    titulo={item.titulo}
                  />:
                  null
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
          onPress={() => this.props.navigation.navigate('Historico')}
        />
      </View>
    );
  }
}