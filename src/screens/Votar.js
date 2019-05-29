import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import BotaoProximo from '../components/BotaoProximo';
import NotificacaoHeader from '../components/NotificacaoHeader';
import BotaoAlternativa from '../components/BotaoAlternativa';
import { db } from '../config';
import styles from '../styles/estilos';
import votarStyles from '../styles/votarStyles';
import BotaoMedio from '../components/BotaoMedio';
import BotaoAnterior from '../components/BotaoAnterior';
let alternativasRef = db.ref('alternativas/');

export default class Votar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selected: 0,
      alternativas: [],
      sending: false,
      sent: false
    }
  }

  componentWillMount() {
    alternativasRef.orderByChild("uid").on('value', snapshot => {
      let alternativas = snapshot.val();

      if (alternativas != null) {
        alternativas = Object.values(alternativas);
        this.setState(() => ({
          alternativas
        }))
      }
    });
  }

  componentDidMount() {
    const { alternativas } = this.props.questao;
    this.setState({ alternativas });
  }

  handleSubmit = async () => {
    const sent = await this.sendData();
    if (sent) {
      this.setState({ sending: false });
      this.setState({ sent: true });
    }
    this.setState({ sending: false });
  }

  sendData = async () => {
    const { alternativas } = this.state;
    this.setState({ sending: true });
    const response = await
      //TODO chamar os dados das alternativas
      //TODO armazenar votos corretamente
      db.ref('alternativas/'+ '-Lg0cDaAFkiD4kTYCjBG').set({
        ...alternativas
      }).then(() => {
        return true;
      }).catch((error) => {
        console.warn('error ', error);
        return false;
      });

      return response;
  }

  finalizarVoto = async () => {
    const { alternativas } = this.state;

    let alternativasVotadas;
    if(alternativas && alternativas.totalVotos) {
      alternativasVotadas = alternativas;
      alternativasVotadas.totalVotos +=1;
    }
    else {
      alternativasVotadas = Object.assign(alternativas, { 'totaslVotos': 1 });
    }
    const sent = await this.sendData();
    if (sent) {
      this.setState({ sending: false });
      this.setState({ sent: true });
    }
    this.setState({ sending: false });
  }

  handleNavigation = ( mudanca ) => {
    const { index, onChange } = this.props;
    const { selected } = this.state; 
    if (mudanca === 0) {
      if(index > 0)
        this.setState({index: index });
        onChange(this.state.index);
    } else {
        this.setState({index: index +1 });
        onChange(this.props.index+1, selected);
    }
  }

  handleSelect = (index) => {
    this.setState({ selected: index });
  }

  render() {
    const { selected, sending, sent } = this.state;
    const { index, questao } = this.props;
    return (
    sent ? 
      <View>
        <Text style={{
            alignSelf: 'center',
            color: '#8400C5',
            fontSize: 20,
            fontWeight: 'bold'
          }}>
            Votos cadastrados com sucesso!
        </Text>
        <BotaoMedio texto="Continuar" onPress={() => this.props.navigation.navigate('Inicio')} />
      </View> 
      :
      sending ?
        <View>
          <Text style={{
            alignSelf: 'center',
            color: '#8400C5',
            fontSize: 20,
            fontWeight: 'bold'
          }}>
            Salvando seu voto...
          </Text>
          <ActivityIndicator
            animating={sending}
            size="large"
            color="#00DC7B"
          />
        </View>
      :
      <View style={styles.container}>
        <View>
          <Text style={votarStyles.pergunta}>
            {questao.pergunta}
          </Text>
          <NotificacaoHeader 
            texto="Selecione uma alternativa (verde = selecionado)"
          />
            <FlatList
              style={{ marginTop: 20 }}
              data={questao.alternativas}
              numColumns={1}
              renderItem={({ item, index }) => (
                <View>
                  <BotaoAlternativa
                    onPress={() => this.handleSelect(index)}
                    index={index}
                    text={item}
                    selectedIndex={selected}
                  />
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {this.props.index.valueOf() < this.props.size.valueOf()-1 ?
          <View style={[styles.flowButtonsContainer, { marginTop: 5 }]}>
            <BotaoAnterior
              endereco='Inicio'
              onPress={() => this.handleNavigation(0)}
            />
            <BotaoProximo
              endereco='Inicio'
              onPress={() => this.handleNavigation(1)}
            />
          </View>
          :
          <BotaoMedio
            texto="Finalizar votação"
            onPress={() => this.finalizarVoto()}
          />
        }
      </View>
    )
  }
}