import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoProximo from '../components/botaoProximo';

export default class Home extends Component {  
  render() {
    return (
      <View style={styles.container}>
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
        
        <BotaoProximo 
          endereco='Convidados' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});