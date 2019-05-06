import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';
import React, {FlatList, SafeAreaView, StyleSheet, Text} from 'react';  
import { View } from 'react-native';
import BotaoNovaSala from '../components/BotaoNovaSala';
import styles from '../styles/estilos';
import SemSalas from '../containers/SemSalas';
import CardSalaVotacao from '../components/CardSalaVotacao';


class Inicio extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      salas: {}
    }
  }
  static navigationOptions = {
    title: 'Votações disponíveis',
  };

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
          <CardSalaVotacao
            onPress = {() => alert('Card selecionado!')}
            status="andamento"
            mensagem="oi"
            titulo="Título pequeno"  
          />
          <CardSalaVotacao
            onPress = {() => alert('Card selecionado!')}
            status="agendada"
            mensagem="Essa é uma mensagem apenas, grande para testar"
            titulo="tudobem"  
          />
          <CardSalaVotacao
            onPress = {() => alert('Card selecionado!')}
            status="encerrada"
            mensagem="oi"
            titulo="Este é um título grande para poder testar o card"  
          />
        </View>
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
