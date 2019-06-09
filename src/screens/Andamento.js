import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import styles from '../styles/estilos';
import andamento from '../styles/andamento';
import StatusVotacao from '../components/StatusVotacao';
import moment from 'moment';
import getStatus from '../utils/getStatus';

export default class Andamento extends Component {
  constructor(props) {
      super(props);
      this.state = {
        titulo: '',
        sala: [],
        encerrou: false
      }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Sala: ${navigation.state.params.sala.titulo}`,
  });

  componentWillMount() {
    const  sala = this.props.navigation.getParam('sala', null);
    const  encerrou = this.props.navigation.getParam('encerrou', null);
    
    if(sala)
      this.setState({sala});
    if(encerrou)
      this.setState({encerrou});
  }

  andamentoVotos = () => {
    this.props.navigation.navigate('AndamentoVotos', {
      'titulo': this.state.titulo
    })
  }

  render() {
    const { sala, encerrou } = this.state;
    return (
      <View style={styles.container}>
        <Text style={andamento.descricao}>
            {sala.descricao}
        </Text>
        <View>
          <StatusVotacao tipo = 'usuario' texto = "100% dos usuários já votaram"/>
          <StatusVotacao tipo = 'hora' texto = {
            encerrou ? 'Votação encerrou em: ' + 
            getStatus(
              sala.dataFinal,
              sala.dataInicial,
              sala.horaFinal,
              sala.horaInicial,
              true
            ): null
          }/>
        </View>
        <BotaoGrande texto="Andamento" onPress={() => this.andamentoVotos()}/>
      </View>
    );
  }
}