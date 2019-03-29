import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import styles from './estilos'

export default class Questao extends Component {  

  static navigationOptions = {
    title: 'Elaboração da Questão',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
        </View>

        <View style={styles.flowButtons}>
          <BotaoAnterior 
            endereco='SalaContexto' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
          <BotaoProximo 
            endereco='QuestaoContexto' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
        </View>
      </View>
    );
  }
}