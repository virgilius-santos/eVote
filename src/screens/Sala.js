
import React, { Component } from 'react';
import { View } from 'react-native';

import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import NoticacaoHeader from '../components/NotificacaoHeader';
import styles from './estilos';

export default class Sala extends Component {
  static navigationOptions = {
    title: 'Criar Sala',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <NoticacaoHeader texto="Passos: 1 de 2" />
        </View>

        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior 
            endereco='Inicio' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
          <BotaoProximo 
            endereco='SalaContexto' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
        </View>
      </View>
    )
  }
}