import React, { Component } from 'react';  
import { Button, View, Text } from 'react-native';

export default class Home extends Component {  
  render() {
    return (
      <View>
        <Text>Criando Sala</Text>
        
        <Button
          title="Voltar tela de Inicio"
          color="blue"
          onPress={() => this.props.navigation.navigate('Inicio')}
        />
        <Button
          title="Criar questões"
          color="green"
          onPress={() => this.props.navigation.navigate('Questao')}
        />
      </View>
    );
  }
}