import React, { Component } from 'react';  
import { View, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import BotaoNovaSala from '../components/BotaoNovaSala';
import styles from '../styles/estilos';
import SemSalas from '../containers/SemSalas';

class Inicio extends Component {  
  constructor(props) {
    super(props) 
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
    const { height } = Dimensions.get('screen');
    return (
      <View style={[styles.container, { height: height }]}>
        <ScrollView style={{ height: height*0.85}}>
            <View>

              <SemSalas 
                texto="No momento você não possui salas de votação disponíveis!"
              />

            </View>
        </ScrollView>
        <BotaoNovaSala
          endereco='Sala' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}

export default Inicio;
