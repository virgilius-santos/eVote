import React, { Component } from 'react';  
import { Button, View, Text, Alert, StyleSheet } from 'react-native';
import BotaoProximo from '../components/botaoProximo';
import styles from './estilos'

export default class Convidados extends Component {  

  static navigationOptions = {
    title: 'Seleção de Convidados',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          
        </View>
        <Button
            title="Submeter Sala"
            color="green"
            onPress={() => {Alert.alert('Sala salva!'), this.props.navigation.navigate('Inicio')}}
          />
      </View>
    );
  }
}