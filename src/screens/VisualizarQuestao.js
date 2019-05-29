import React, { Component } from 'react'; 
import { ScrollView, View, Text } from 'react-native';
import BotaoGrande from '../components/BotaoGrande';
import Votar from './Votar';
import Descricao from '../components/Descricao';
import NotificacaoHeader from '../components/NotificacaoHeader';
import BotaoDownload from '../components/BotaoDownload';
import styles from '../styles/estilos';
import votarStyles from '../styles/votarStyles';

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
    title: `Sala ${navigation.state.params.titulo}:`
  });

  handleDownload = () => { 
  }
  
  votar = () => {
    const { questoes } = this.state;
    if (questoes)
      this.setState({ votacaoIniciada: true });
  }

  onChange = (index) => {
    this.setState({ votacaoIniciada: false, index: index });
  }

  informacoesDaQuestao = () => {
    const { questoes, index } = this.state;
    return (
      <View style={{ flex:7/8 }} >
        <View style={{ flex: 1, paddingBottom: 50, paddingTop: 50, justifyContent: 'space-between' }}>
          <NotificacaoHeader 
            texto={`Perguntas: ${index+1} de ${questoes.length}`}
          />
          <Text style={votarStyles.pergunta}>
            {questoes ? questoes[index].pergunta : null}
          </Text>
          <View>
            <NotificacaoHeader 
              texto="Arquivo sobre esta pergunta:"
            />
            <BotaoDownload texto="..." onPress={() => this.handleDownload()}/>
          </View>
          <View style={{padding: 30}}>
          {!!questoes[index].url &&
            <Descricao
              titulo="Link para informações"
              texto={questoes[index].url} 
            />}
          </View>
        </View>
      </View>
    );
  }

  render() {
    const { questoes, index, votacaoIniciada } = this.state;
    return (
      !votacaoIniciada ?
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          {this.informacoesDaQuestao()}
        </ScrollView>
        <View style={[styles.flowButtonsContainer, { alignSelf: "center", marginTop: 5}]}>
          <BotaoGrande
            texto="Votar"
            onPress={() => this.votar()}
          />
        </View>
     </View>
    :
    //mostra alternativas a partir daqui
      <Votar
        navigation = {this.props.navigation}
        selected={0}
        index={index}
        size={questoes.length}
        questao={questoes[index]}
        onChange={(index) => this.onChange(index)}
      />
    );
  }
}