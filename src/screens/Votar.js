import React, { Component } from 'react';
import BotaoProximo from '../components/BotaoProximo';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoAlternativa from '../components/BotaoAlternativa';
import { db } from '../config';
import { ActivityIndicator, View, Text, ScrollView, FlatList } from 'react-native';
import styles from '../styles/estilos';
import Progresso from '../components/Progresso';
import BotaoMedio from '../components/BotaoMedio';

export default class Votar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      index: 0,
      size: 5
    }
  }

  componentWillMount() {
    if(this.props.navigation) {
      const { questao, index } = this.props.navigation.state.params;
      if(index) {
        this.setState({ index });
      }
      this.setState({ questao });
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Sala: ${navigation.state.params.index+1}`,
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

  handleNavigation = async (mudanca) => {
    const { index, questao } = this.state;
    if (mudanca === 0) {
      await this.setState({ index: index - 1 })
    } else {
      await this.setState({ index: index + 1 })
    }

    if(index) {
    alert(index);
      this.props.navigation.navigate('VisualizarQuestao', { 'questao': questao, 'index': index });7
    }
    else
      this.props.navigation.navigate('VisualizarQuestao', { 'questao': 'Não disponível' });
  }

  handleSelect = (index) => {
    this.setState({ selected: index });
  }

  render() {
    const { sending, sent, index, questao, selected } = this.state;
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
              <Text>{this.state.index.valueOf() < this.state.size.valueOf()}</Text>
              <BotaoAnterior
                endereco='QuestaoSalva'
                onPress={() => this.handleNavigation(0)}
              />
              {this.state.index.valueOf() < this.state.size.valueOf() ?
                <View>
                  <Progresso quantidade={5} total={5} />
                  <BotaoProximo
                    endereco='Inicio'
                    onPress={() => this.handleNavigation(1)}
                  />
                </View>
                :
                <BotaoMedio
                  texto="Continuar"
                  onPress={() => this.props.navigation.navigate('Inicio')}
                />
              }
            </View>
          </View>
    )
  }
}