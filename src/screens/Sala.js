
import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';

import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import styles from './estilos'

export default class Sala extends Component {

  static navigationOptions = {
    title: 'Criação de Sala',
  };

  render() {
    return (

      <View style={styles.container}>

        <View>
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