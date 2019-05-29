import React, { Component } from 'react';
import BotaoProximo from '../components/BotaoProximo';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoAlternativa from '../components/BotaoAlternativa';
import { db } from '../config';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/estilos';
import BotaoMedio from '../components/BotaoMedio';

export default class Votar extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleNavigation = (mudanca) => {
    const { index, questao, onChange } = this.props;
    if (mudanca === 0) {
      if(index > 0)
        this.setState({index: index -1 });
    } else {
        this.setState({index: index +1 });
        }

    onChange(index);
    }

  handleSelect = (index) => {
    this.setState({ selected: index });
  }

  render() {
    const { selected } = this.state;
    const { index, questao, navigation } = this.props;
    return (
      <View>
        <View>
            <FlatList
              style={{ marginTop: 20 }}
              data={questao.alternativas}
              numColumns={1}
              renderItem={({ item, index }) => (
                <View>
                  <BotaoAlternativa
                    key={index}
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
        <View style={[styles.flowButtonsContainer, { alignSelf: "auto" }, { marginTop: 5 }]}>
          <Text>{index}</Text>
          <Text>{this.props.index.valueOf() < this.props.size.valueOf()}</Text>
          <BotaoAnterior
            endereco='QuestaoSalva'
            onPress={() => this.handleNavigation(0)}
          />
          {this.props.index.valueOf() < this.props.size.valueOf()-1 ?
            <View>
              <BotaoProximo
                endereco='Inicio'
                onPress={() => this.handleNavigation(1)}
              />
            </View>
            :
            <BotaoMedio
              texto="Continuar"
              onPress={() => navigation.navigate('Inicio')}
            />
          }
        </View>
      </View>
    )
  }
}