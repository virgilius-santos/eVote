import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import styles from '../styles/estilos';
import andamento from '../styles/andamento';
import StatusVotacao from '../components/StatusVotacao';

export default class Andamento extends Component {
  constructor(props) {
      super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Sala: ${navigation.state.params.sala.titulo}`,
  });
  
  handleSubmit=()=>{
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={andamento.descricao}>
            Essa sala foi criada para decidirmos o layout do aplicativo pooler da Ages 2019/1, o E-Vote. Agente precsa de um texto longo pa oi sajsk
        </Text>
        <View>
          <StatusVotacao tipo = 'usuario' texto = "33% dos usuários já votaram"/>
          <StatusVotacao tipo = 'hora' texto = "A votação encerra as 06h do dia 13/03"/>
        </View>
        <BotaoGrande texto="Andamento" onPress={() => this.props.navigation.navigate('AndamentoVotos')}/>
      </View>
    );
  }
}