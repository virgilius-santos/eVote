import React, { Component } from 'react'; 
import { Text,ScrollView, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import Descricao from '../components/Descricao';
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
        <ScrollView horizontal>
        <View style={{width: 350, height: 160, flexDirection: "row",
              justifyContent:"space-around", alignItems: "center"}}>
          <CardInfo titulo = "Início da Votação" data = "22/04/19" hora = "12:34"/>
          <CardInfo titulo = "Fim da Votação" data = "22/05/19" hora = "12:34"/>
          </View>
        </ScrollView>

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