import React, { Component } from 'react'; 
import { ScrollView, View } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import Votar from './Votar';
import Descricao from '../components/Descricao';
import BotaoDownload from '../components/BotaoDownload';
import styles from '../styles/estilos';

export default class VisualizarQuestao extends Component {
  constructor(props) {
      super(props);
      this.state = {
        index: 0,
        questoes: [],
        votacaoIniciada: false
      }
  }

  componentWillMount() {
    if(this.props.navigation) {
      const { questoes , index } = this.props.navigation.state.params;
      if(index) {
        this.setState({ index });
      }
      this.setState({ questoes });
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Pergunta ${navigation.state.params.index+1 || 1}:`
  });

  handleDownload = () => { 
  }
  
  votar = () => {
    const { questoes } = this.state;
    if (questoes)
      this.setState({ votacaoIniciada: true });
  }

  onChange = (index) => {
    this.setState({ votacaoIniciada: false, index });
  }

  render() {
    const { questoes, index, votacaoIniciada } = this.state;
    return (
      !votacaoIniciada ?
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex:4/8, justifyContent: 'space-between' }} >
            <View style={{ paddingBottom: 50, paddingTop: 50 }}>
            <Descricao
                titulo={questoes[index].pergunta}
            />
            <BotaoDownload texto="..." onPress={() => this.handleDownload()}/>
              <Descricao
                titulo="Link para informações"
                texto={questoes[index].url} 
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
    :
    //mostra alternativas a partir daqui
    <Votar
      navigation = {this.props.navigation}
      index={index}
      size={questoes.length}
      questao={questoes[index]}
      onChange={() => this.onChange(index)}
    />
    );
  }
}