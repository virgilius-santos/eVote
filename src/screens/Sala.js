
import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';

import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import InputTexto from '../components/InputTexto';
import styles from '../styles/estilos';

export default class Sala extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: "",
      titulo: "",
      descricaoLimite: false
    };
  }
  static navigationOptions = {
    title: 'Criação de Sala',
  };

  handleTitle = (value) => {
    this.setState({titulo: value})
  }

  handleDescription = (value) => {
    if(value.length >= 10)
      this.setState({descricaoLimite: true})
    else
      this.setState({descricaoLimite: false})

      this.setState({descricao: value})
  }

  render() {
    const { descricao, titulo, descricaoLimite } = this.state;
    return (

      <View style={styles.container}>

        <View>
          <InputTexto
            label="Título"
            onChangeText={value => this.handleTitle(value)}
            value={titulo}
          />

          <InputTexto
            label="Descrição"
            max={10}
            onChangeText={value => this.handleDescription(value)}
            value={descricao}
          />
          {descricaoLimite && <Text>Limite de caracteres atingido na descrição!</Text>}
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