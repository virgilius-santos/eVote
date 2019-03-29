import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import styles from './estilos'

export default class QuestaoContexto extends Component {  

  static navigationOptions = {
    title: 'Contexto da Questão',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          
        </View>
        
        <View style={styles.flowButtons}>
          <BotaoAnterior 
            endereco='Questao' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
          <BotaoProximo 
            endereco='QuestaoSalva' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
        </View>
      </View>
    );
  }
}