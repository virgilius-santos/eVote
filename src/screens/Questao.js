import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
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

        <BotaoProximo 
          endereco='QuestaoContexto' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}