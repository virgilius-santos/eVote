import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import styles from '../styles/estilos';
import andamento from '../styles/andamento';
import StatusVotacao from '../components/StatusVotacao';

export default class Andamento extends Component {
  constructor(props) {
      super(props);
      this.state = {
        titulo: ''
      }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Sala: ${navigation.state.params.titulo}`,
  });

  componentWillMount() {
    const  titulo = this.props.navigation.getParam('titulo', null);
    
    if(titulo)
      this.setState({titulo});
  }
  
  handleSubmit = () => {
    
  }

  andamentoVotos = () => {
    this.props.navigation.navigate('AndamentoVotos', {
      'titulo': this.state.titulo
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={andamento.descricao}>
            Essa sala foi criada para decidirmos o layout do aplicativo pooler da Ages 2019/1, o E-Vote.
        </Text>
        <View>
          <StatusVotacao tipo = 'usuario' texto = "100% dos usuários já votaram"/>
          <StatusVotacao tipo = 'hora' texto = "A votação encerra as 06h do dia 13/05"/>
        </View>
        <BotaoGrande texto="Andamento" onPress={() => this.andamentoVotos()}/>
      </View>
    );
  }
}