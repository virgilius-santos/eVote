import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoProximo from '../components/BotaoProximo';
import styles from './estilos'

export default class QuestaoSalva extends Component {  

  static navigationOptions = {
    title: 'Questão Finalizada',
    headerLeft: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            title="Criar outra questão"
            color="purple"
            onPress={() => this.props.navigation.navigate('Questao')}
          />
        </View>
        
        <BotaoProximo 
          endereco='Convidados' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}