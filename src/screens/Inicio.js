import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';
import { db } from '../config';

let submeterQuestoes = questoes => {
  db.ref('/questoes').push(questoes)
}

import React, { Component } from 'react';  
import { View, Text, Alert} from 'react-native';
import BotaoMedio from '../components/BotaoMedio';
import BotaoNovaSala from '../components/BotaoNovaSala';
import styles from './estilos';

class Inicio extends Component {  
  static navigationOptions = {
    title: 'Bem-vindo!',
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
          <BotaoMedio
            texto="Enviar questões"
            backgroundColor="#7500CF"
            onPress={() => this.handleSubmit()}
          />

          <BotaoMedio
            texto="Adicionar questão"
            backgroundColor="#00E576"
            onPress={() => this.addQuestao()}
          />
        </View>

        {this.printQuestoes()}

        <BotaoNovaSala 
          endereco='Sala' 
          navigation={this.props.navigation} 
        />
      </View>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
