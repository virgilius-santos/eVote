
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import DateInput from '../components/DateInput'
import styles from './estilos'

export default class Sala extends Component {

  static navigationOptions = {
    title: 'Criação de Sala',
  };

  constructor(props) {
    super(props);
    this.state = {
      entradaTitulo: 'Título',
      entradaDesc: 'Descrição'
    };
  }
  
  render() {
    return (

      <View style={styles.container}>

        <View>
          <Text>
            Data de Inicio
          </Text>
          <DateInput/>
          <Text>
            Data de Fim
          </Text>
          <DateInput/>
          <View style={styles.caixaDeTexto}>
            <TextInput
              value={this.state.entradaTitulo}
              onChangeText={(entradaTitulo) => this.setState({entradaTitulo})}
              maxLength={50}
            />
          </View>
          <View style={styles.caixaDeTexto}>
            <TextInput
              value={this.state.entradaDesc}
              onChangeText={(entradaDesc) => this.setState({entradaDesc})}
              maxLength={50}
            />
          </View>
        </View>

        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior 
            endereco='Inicio' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
          <BotaoProximo 
            endereco='SalaContexto' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
        </View>
      </View>
    )
  }
}