import React, { Component } from 'react';
import BotaoProximo from '../components/BotaoProximo';
import NotificacaoHeader from '../components/NotificacaoHeader';
import BotaoAlternativa from '../components/BotaoAlternativa';
import { db } from '../config';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/estilos';
import votarStyles from '../styles/votarStyles';
import BotaoMedio from '../components/BotaoMedio';
import BotaoAnterior from '../components/BotaoAnterior';

export default class Votar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      selected: 0
    }
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

  handleNavigation = ( mudanca ) => {
    const { index, onChange } = this.props;
    if (mudanca === 0) {
      if(index > 0)
        this.setState({index: index });
        onChange(this.state.index);
    } else {
        this.setState({index: index +1 });
        onChange(this.props.index+1);
    }
  }

  handleSelect = (index) => {
    this.setState({ selected: index });
  }

  render() {
    const { selected } = this.state;
    const { index, questao, navigation } = this.props;
    return (
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
            onPress={() => navigation.navigate('Inicio')}
          />
        }
      </View>
    )
  }
}