import React, { Component } from 'react';
import BotaoProximo from '../components/BotaoProximo';
import BotaoAnterior from '../components/BotaoAnterior';
import { db } from '../config';
import { ActivityIndicator, View, Text } from 'react-native';
import styles from '../styles/estilos';
import Progresso from '../components/Progresso';
import BotaoMedio from '../components/BotaoMedio';

export default class Votacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Sala: ${navigation.state.params.sala.titulo}`,
    headerLeft: null
  });

  handleSubmit = async () => {
    const sent = await this.sendData();
    if (sent) {
      this.setState({ sending: false });
      this.setState({ sent: true });
    }
    this.setState({ sending: false });
  }

  sendData = async () => {
    this.setState({ sending: true });
    const response_sala = await
    //TODO chamar os dados das alternativas
      db.ref('salas/').push({
        ...sala
      }).then(() => {
        return true;
      }).catch((error) => {
        console.warn('error ', error);
        return false;
      });      
  }

  handleNavigation = (mudanca) => {
    const { index } = this.state;
    if(mudanca === 0){
      this.setState({ index: index - 1})
    } else{
      this.setState({ index: index + 1})
    }
  }

  render() {
    const { sending, sent, index } = this.state;
    return (
      sent ?
        <View>
          <Text style={{
            alignSelf: 'center',
            color: '#8400C5',
            fontSize: 20,
            fontWeight: 'bold'
          }}>
            Sala cadastrada com sucesso!
        </Text>
          
        </View> :
        sending ?
          <View>
            <Text style={{
              alignSelf: 'center',
              color: '#8400C5',
              fontSize: 20,
              fontWeight: 'bold'
            }}>
              Salvando a sala...
        </Text>
            <ActivityIndicator
              animating={sending}
              size="large"
              color="#00DC7B"
            />
          </View> :
            //{index < tamanho de questoes ? botoes abaixo : <BotaoMedio texto="Continuar" onPress={() => this.props.navigation.navigate('Inicio')} />}
            <View style={[styles.flowButtonsContainer, { alignSelf: "auto" }, { marginTop: 5 }]}>
              <Text>{index}</Text>
              <BotaoAnterior
                endereco='QuestaoSalva'
                onPress={() => this.handleNavigation(0)}
              />
              <Progresso quantidade={5} total={5} />
              <BotaoProximo
                endereco='Inicio'
                onPress={() => this.handleNavigation(1)}
              />
            </View>
          
    )


  }
}