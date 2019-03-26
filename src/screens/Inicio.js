import React, { Component } from 'react';  
import { Button, View, Text } from 'react-native';

export default class Home extends Component {  
  render() {
    return (
      <View>
        <Text>Inicio</Text>
        
        <Button
          title="Criar Sala"
          color="green"
          onPress={() => this.props.navigation.navigate('Sala')}
        />
      </View>
    );
  }
}