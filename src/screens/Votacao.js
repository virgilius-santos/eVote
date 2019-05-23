import React, { Component } from 'react'; 
import { Text, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import Descricao from '../components/Descricao';
import BotaoDownload from '../components/BotaoDownload';
import styles from '../styles/estilos';
import CardInfo from '../components/CardComecarVotacao';

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
        <Text>
            Votação tela 1
        </Text>
        <CardInfo titulo = "Iniciar Votação" data = "22/11/19" hora = "12:34"/>
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