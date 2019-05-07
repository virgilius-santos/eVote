import React, { Component } from 'react';
import {View, Text} from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import styles from '../styles/estilos';
import InputTexto from '../components/InputTexto';
import BotaoMaisAlternativas from '../components/BotaoMaisAlternativas';
import Aviso from '../components/Aviso';
import { ScrollView } from 'react-native-gesture-handler';

export default class Questao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sala: {},
      documento: undefined,
      informacoes: "",
      questao: [],
      erroPergunta: "",
      erroAlternativa: ""
    };
  }

  componentWillMount() {
    const questoes = this.state.questao;
    questoes.push({pergunta: "", alternativas: ["", ""]});
    this.setState({questao: questoes});
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Sala: ${navigation.state.params.sala.titulo}`,
    headerLeft: null
  });

  render() {
    const {
      questao,
      erroAlternativa,
      erroPergunta,
    } = this.state;
    return (
      <View style={styles.container}>

        <View styles={[{alignSelf:"auto"}, {marginBottom: 5}]}>
          <Text style={[styles.title2, {color:"#7500CF"}]}>
            Digite a pergunta e as alternativas
          </Text>
          <InputTexto
            error={!!erroPergunta}
            label="Pergunta"
            onChangeText={value => this.handlePergunta(value)}
            value={questao[questao.length-1].pergunta}
          />
        </View>
        <Aviso texto={erroPergunta} />
        <ScrollView>
          {
            questao[questao.length-1].alternativas.map((alternativa,index) => {
              currentValue = index + 1;
              return (
                <View key={index + 1}>
                  <InputTexto
                    error={!!erroAlternativa}
                    key={index}
                    flex={3}
                    max={100}
                    label={"Alternativa " + currentValue }
                    value={questao[questao.length-1].alternativas[index]}
                    onChangeText={text => this.handleAlternativa(text, index)}
                  />
                </View>
              );
            })
          }
          <Aviso texto={erroAlternativa} />
          <BotaoMaisAlternativas
              onPress={() => this.addAlternativa()} 
          />
        </ScrollView>

        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior
            endereco='SalaContexto'
            navigation={this.props.navigation}
            style={styles.icon}
          />
          <BotaoProximo
            endereco='QuestaoContexto'
            navigation={this.props.navigation}
            style={styles.icon}
            onPress={() => this.validate()}
          />
        </View>

      </View>
    )
  }
  
  validate = () => {
    const { questao } = this.state;
    const { pergunta, alternativas } = questao[questao.length-1];
    const  sala = this.props.navigation.getParam('sala', null);
    const documento = this.props.navigation.getParam('documento', null);
    const informacoes = this.props.navigation.getParam('informacoes', null);

    if(sala)
      this.setState({sala});
    if(documento)
      this.setState({documento});
    if(informacoes)
      this.setState({informacoes});

    if(!pergunta) 
      return this.setState({erroPergunta: 'Você não perguntou nada.'});
    if(alternativas.length <= 1 || !alternativas[0] || !alternativas[1] ||
      alternativas[0].length>100 || alternativas[1].length>100)
      return this.setState({erroAlternativa: 'Preencha ao menos 2 alternativas até 100 caracteres.'})
    else {
      const questoes = this.state.questao;
      questoes.push({pergunta: "", alternativas: ["", ""]});
      this.setState({questao: questoes});
      return this.props.navigation.navigate('QuestaoContexto', {
        sala: sala,
        documento: documento,
        informacoes: informacoes,
        questao: this.state.questao
      })
    }
  }

  handlePergunta = (value) => {
    let { questao } = this.state;
    this.setState({erroPergunta: ""});
    questao[questao.length-1].pergunta = value;
    this.setState({questao: questao});
  }

  addAlternativa = () => {
    let { questao } = this.state;
    let alternativas = questao[questao.length-1].alternativas;
    alternativas.push("");
    questao[questao.length-1].alternativas = alternativas;
    this.setState({questao: questao});
  }

  handleAlternativa(text, index){
    this.setState({erroAlternativa: ""});
    let { questao } = this.state;
    this.setState({erroPergunta: ""});
    questao[questao.length-1].alternativas[index] = text;
    this.setState({questao: questao});
  }
  
}