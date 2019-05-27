import React, { Component } from 'react'; 
import { ScrollView, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import Descricao from '../components/Descricao';
import BotaoDownload from '../components/BotaoDownload';
import styles from '../styles/estilos';

export default class VisualizarQuestao extends Component {
  constructor(props) {
      super(props);
      this.state = {
        questoes: []
      }
  }

  componentWillMount() {
    if(this.props.navigation) {
      const { questoes } = this.props.navigation.state.params;
      this.setState({ questoes });
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Pergunta 1:'
  });

  handleDownload = () => { 
  }
  
  votar = () => {
    const { questoes } = this.state;
    if (questoes)
      this.props.navigation.navigate('Votar', { 'questoes': questoes });
    else
      this.props.navigation.navigate('Votar', { 'questoes': 'Não disponível' });
  }

  render() {
    const { questoes } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex:4/8, justifyContent: 'space-between' }} >
            <View style={{ paddingBottom: 50, paddingTop: 50 }}>
            <Descricao
                titulo={questoes[0].pergunta}
            />
            <BotaoDownload texto="..." onPress={() => this.handleDownload()}/>
              <Descricao
                titulo="Link para informações"
                texto={questoes[0].url} 
              />
            </View>
          </View>
      </ScrollView>
      <View style={[styles.flowButtonsContainer, {alignSelf: "center"}, {marginTop: 5}]}>
        <BotaoGrande
          texto="Iniciar Votação"
          onPress={() => this.votar()}
        />
      </View>
    </View>
    );
  }
}