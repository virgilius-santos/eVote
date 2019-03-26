import React, { Component } from 'react';  
import { Button, View, Text } from 'react-native';

export default class Home extends Component {  
  render() {
    return (
      <View>
        <Text>Criando Questoes</Text>
        
        <Button
          title="Voltar tela da sala"
          color="blue"
          onPress={() => this.props.navigation.navigate('Sala')}
        />
        <Button
          title="Selecionar convidados"
          color="green"
          onPress={() => this.props.navigation.navigate('Convidados')}
        />
      </View>
    );
  }
}