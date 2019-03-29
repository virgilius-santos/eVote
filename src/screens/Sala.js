import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';

import React, { Component } from 'react';
import { Button, View, Text, StyleSheet, Alert } from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import BotaoProximo from '../components/botaoProximo';
import styles from './estilos'

import SalaModel from '../Models/Sala.model';

import { db } from '../config';

let submeterQuestoes = questoes => {
  db.ref('/questoes').push(questoes)
}

class Sala extends Component {

  static navigationOptions = {
    title: 'Criação de Sala',
  };

  constructor(props) {
    super(props);

    this.state = {};
  }
  counter = 0;


  handleSubmit = () => {
    submeterQuestoes(this.props.sala.questoes);
    Alert.alert('Questoes salvas.');
  };

  addQuestao = () => {
    questao = {
      nome: `questao ${this.counter++}`
    }
    this.props.addQuestao(questao)
  }

  printQuestoes = () => {
    return this.props.sala.questoes.map(q => {
      return (
        <Text key={q.nome}>{q.nome}</Text>
      );
    })
  }
  render() {
    return (

      <View style={styles.container}>

        <View>
          
          <Button
          title="Envia questoes"
          color="red"
          onPress={() => this.handleSubmit()}
          />

          <Button
            title="ADD questão"
            color="pink"
            onPress={() => this.addQuestao()}
          />
        </View>

        {this.printQuestoes()}

        <BotaoProximo 
          endereco='Questao' 
          navigation={this.props.navigation} 
          style={styles.icon} 
        />

      </View>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    sala: state.salaReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Sala);