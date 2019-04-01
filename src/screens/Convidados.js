import React, { Component } from 'react';  
import { Button, View, Text, Alert, StyleSheet } from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import styles from '../styles/estilos';

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
            title="Salvar Sala"
            color="purple"
            onPress={() => {Alert.alert('Sala salva!'), this.props.navigation.navigate('Inicio')}}
          />
      </View>
    );
  }
}