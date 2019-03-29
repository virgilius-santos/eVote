import React, { Component } from 'react';  
import { Button, View, Alert } from 'react-native';
import styles from './estilos';

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