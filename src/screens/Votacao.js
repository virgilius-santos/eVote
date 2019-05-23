import React, { Component } from 'react'; 
import { ScrollView, StyleSheet, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import Descricao from '../components/Descricao';
import BotaoDownload from '../components/BotaoDownload';
import styles from '../styles/estilos';
import CardInfo from '../components/CardInfo';

export default class Votacao extends Component {
  constructor(props) {
      super(props);
      this.state = {
        titulo: ''
      }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Sala: BUSCAR INFO DO FIREBASE`,
  });
  
  votacaoContexto = () => {
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <View style={stylesVotacao.cards}>
            <CardInfo titulo = "Início da Votação" data = "22/04/19" hora = "12:34"/>
            <CardInfo titulo = "Fim da Votação" data = "22/05/19" hora = "12:34"/>
          </View>
        </ScrollView>
        <BotaoDownload texto="..." onPress={() => console.warn("AA")}/>
        <Descricao
          titulo="Titulo"
          texto="Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna wirl.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna wirl"
        />
        <BotaoGrande
          backgroundColor="#00E576"
          texto="Começar"
          onPress={() => this.votacaoContexto()}
        />
      </View>
    );
  }
}

const stylesVotacao = StyleSheet.create({
  cards: {
    alignItems: "center",
    width: 400,
    height: 180,
    flexDirection: "row",
    justifyContent:"space-around",
    backgroundColor: "red"
  }
});