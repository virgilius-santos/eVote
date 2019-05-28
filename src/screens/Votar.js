import React, { Component } from 'react';
import BotaoProximo from '../components/BotaoProximo';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoAlternativa from '../components/BotaoAlternativa';
import { db } from '../config';
import { ActivityIndicator, View, Text, ScrollView, FlatList } from 'react-native';
import styles from '../styles/estilos';
import Progresso from '../components/Progresso';
import BotaoMedio from '../components/BotaoMedio';
import Alternativas from './Alternativas';

export default class Votar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      size: 5
    }
  }

  componentWillMount() {
    if(this.props.navigation) {
      const { questoes } = this.props.navigation.state.params;
      this.setState({ questoes });
    }
  }

  static navigationOptions = ({ navigation }) => ({
    // title: `Sala: ${navigation.state.params.sala.titulo}`,
    title: 'Sala'
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
    if (mudanca === 0) {
      this.setState({ index: index - 1 })
    } else {
      this.setState({ index: index + 1 })
    }
  }

  handleSelect = () => {

  }

  render() {
    const { sending, sent, index, questoes } = this.state;
    return (
          <View>
            <View>
              {questoes.map( (value, index) =>
                 <FlatList
                  style={{ marginTop: 20 }}
                  data={value.alternativas}
                  numColumns={1}
                  renderItem={({ item, index }) => (
                   <View>
                     <BotaoAlternativa
                       key={index}
                       onPress={() => this.handleSelect(index)}
                       index={index}
                       text={item}
                       selected={false}
                     />
                   </View>
                 )}
                 keyExtractor={(item, index) => index.toString()}
               />
              )}
            </View>
            

            {/* <View style={[styles.flowButtonsContainer, { alignSelf: "auto" }, { marginTop: 5 }]}>
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

            </View> */}

          </View>
    )
  }
}