import React, { Component } from 'react'; 
import { ScrollView, StyleSheet, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import Descricao from '../components/Descricao';
import BotaoDownload from '../components/BotaoDownload';
import styles from '../styles/estilos';
import CardInfo from '../components/CardInfo';
import { FileSystem } from 'expo';
import { storageRef } from '../config';

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

  handleDdownload = async () => {
    const url = await storageRef.child('ambiente-de-desenvolvimento-rn.pdf').getDownloadURL();
    const filePath = await `${FileSystem.documentDirectory}eVote/ambiente-de-desenvolvimento-rn.pdf`;
    const res = await FileSystem.downloadAsync(url, filePath);
    const i = await FileSystem.getInfoAsync(res.uri);
    console.log(i); //{"isDirectory":0,"exists":0}
  }
  
  votacaoContexto = () => {
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <ScrollView horizontal>
            <View style={[stylesVotacao.cards]}>
              <CardInfo titulo = "Início da Votação" data = "22/04/19" hora = "12:34"/>
              <CardInfo titulo = "Fim da Votação" data = "22/05/19" hora = "12:34"/>
            </View>
          </ScrollView>
          <View style={{ flex:4/8, justifyContent: 'space-between'}} >
            <Descricao
              titulo="Titulo"
              texto="Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna wirl.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna wirl"
            />
            <BotaoDownload texto="..." onPress={() => this.handleDdownload()}/>
          </View>
        
        <View style={[styles.flowButtonsContainer, {alignSelf: "auto"}, {marginTop: 5}]}>
          <BotaoGrande
            backgroundColor="#00E576"
            texto="Começar"
            onPress={() => this.votacaoContexto()}
          />
        </View>
      </ScrollView>
    </View>
    );
  }
}

const stylesVotacao = StyleSheet.create({
  cards: {
    flex:4/8,
    alignItems: "center",
    width: 400,
    height: 180,
    flexDirection: "row",
    justifyContent:"space-around"
  }
});