import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoProximo from '../components/BotaoProximo';
import styles from './estilos'

export default class SalaContexto extends Component {  

  static navigationOptions = {
    title: 'Contexto da Sala',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          
        </View>
        
        <BotaoProximo 
          endereco='Questao' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}