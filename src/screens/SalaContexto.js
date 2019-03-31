import React, { Component } from 'react';  
import { View, Text } from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoEnvioArquivo from '../components/BotaoEnvioArquivo'
import BotaoProximo from '../components/BotaoProximo';
import NoticacaoHeader from '../components/NotificacaoHeader';
import InputTexto from '../components/InputTexto';
import styles from '../styles/estilos';
import salaStyles from '../styles/salaStyles';

export default class SalaContexto extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      informacoes: "",
      erro: ""
    };
  }
  static navigationOptions = {
    title: 'Criar Sala',
  };

  handleInfo = (value) => {
    this.setState({informacoes: value});
  }

  render() {
    const { informacoes } = this.state;
    return (
      <View style={styles.container}>
        <View styles={styles.innerContainer}>
          <NoticacaoHeader texto="Passos: 2 de 2" />
          <Text style={styles.title2}>Informações que ficarão em destaque:</Text>
          
          <BotaoEnvioArquivo
            style={salaStyles.button}
            texto="Anexar PDF"
            onPress={() => {
              alert("Arquivo");
            }}
          />

          <InputTexto
            style={salaStyles.input}
            label="Informações adicionais"
            multiline
            onChangeText={value => this.handleInfo(value)}
            value={informacoes}
          />          
        </View>
        
        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior 
            endereco='Sala' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
          <BotaoProximo 
            endereco='Questao' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
        </View>
      </View>
    );
  }
}