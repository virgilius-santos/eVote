import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import styles from '../styles/estilos';

export default class SalaContexto extends Component {  

  static navigationOptions = {
    title: 'Contexto da Sala',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          
        </View>
        
        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior 
            endereco='Sala' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
          <BotaoProximo 
            endereco='Questao' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
        </View>
      </View>
    );
  }
}