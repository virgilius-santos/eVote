import React, { Component } from 'react';  
import { Button, View, Text, Alert } from 'react-native';

export default class Home extends Component {  
  render() {
    return (
      <View>
        <Text>Selecionando Convidados</Text>
        
        <Button
          title="Voltar para questões"
          color="blue"
          onPress={() => this.props.navigation.navigate('Questao')}
        />
        <Button
          title="Submeter Sala"
          color="green"
          onPress={() => Alert.alert('Final do Fluxo')}
        />
      </View>
    );
  }
}