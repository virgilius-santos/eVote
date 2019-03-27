import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoProximo from '../components/botaoProximo';

export default class Home extends Component {  
  render() {
    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.bigBlue}>Criando Sala</Text>
        
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

        <BotaoProximo 
          endereco='Inicio' 
          navigation={this.props.navigation} 
          style={styles.icon} 
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