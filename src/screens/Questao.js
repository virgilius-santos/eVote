import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import styles from '../styles/estilos';
import InputTexto from '../components/InputTexto';
import BotaoMaisAlternativas from '../components/BotaoMaisAlternativas';
import Aviso from '../components/Aviso';


export default class Questao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pergunta: "",
      erroPergunta: "",
      descricaoLimite: false,
      alternativas: {},
    };
  }
  static navigationOptions = {
    title: 'Elaboração da Questão',
  };

  handlePergunta = (value) => {
    this.setState({ erroPergunta: "" });
    this.setState({ pergunta: value })
  }

  handleSubmit = () => {
    this.validate();
  }

  validate = () => {
    if (this.state.pergunta.length > 0) {
      this.setState({ erroPergunta: "" });

      this.props.navigation.navigate('QuestaoContexto');

      return
    }
    if (this.state.erroPergunta)
      return this.setState({ erroPergunta: "" });
    else
      return this.setState({ erroPergunta: "Insira uma Pergunta" });

  }

  addAlternativas = () => {
    return this.props.alternativas.map(a => {
      return (
        <View>
          <Text key={a.nome}>{a.nome}</Text>
          <InputTexto />
        </View>

      );
    })
  }

  render() {
    const { pergunta, erroPergunta } = this.state;

    return (
      <View style={styles.container}>

        <View styles={styles.innerContainer}>
          <Text style={styles.title2}>Adicionar Questão</Text>
          <Text style={styles.title2}>Questão 1</Text>

          <InputTexto
            error={!!erroPergunta}
            label="Pergunta"
            onChangeText={value => this.handlePergunta(value)}
            value={pergunta}
          />
          {!!erroPergunta && <Aviso texto={erroPergunta} />}


          <BotaoMaisAlternativas
            onPress={() => this.addAlternativas()} />
        </View>



        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior
            endereco='SalaContexto'
            navigation={this.props.navigation}
            style={styles.icon}
          />
          <BotaoProximo
            endereco='QuestaoContexto'
            navigation={this.props.navigation}
            style={styles.icon}
            onPress={() => this.handleSubmit()}
          />
        </View>
      </View>
    );
  }
}