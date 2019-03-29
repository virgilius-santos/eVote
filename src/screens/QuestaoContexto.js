import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
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
        
        <BotaoProximo 
          endereco='QuestaoNovamente' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}