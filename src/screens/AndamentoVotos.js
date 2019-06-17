import React, { Component } from 'react'; 
import { Text, View, FlatList, ScrollView } from 'react-native';
import QuestaoCard from '../components/QuestaoCard';
import styles from '../styles/estilos';
import andamento from '../styles/andamento';
import BarraProgresso from '../components/BarraProgresso';
import IndiceAlternativa from '../components/IndiceAlternativa';

export default class Andamento extends Component {
  constructor(props) {
      super(props);
      this.state = {
        qtdVotantes: 5,
        questoes: [
          {id: 1, titulo:'minha pergunta?',
           alternativas: [
             {id: 1, titulo: 'alternativa a', votos: 3},
             {id: 2, titulo: 'alternativa b', votos: 2},
           ]},
          {id: 2, titulo:'minha pergunta a?',
          alternativas: [
            {id: 1, titulo: 'alternativa a', votos: 1},
            {id: 2, titulo: 'alternativa b', votos: 4},
          ]},
          {id: 3, titulo:'minha pergunta b?',
          alternativas: [
            {id: 1, titulo: 'alternativa a', votos: 1},
            {id: 2, titulo: 'alternativa b', votos: 2},
            {id: 3, titulo: 'alternativa c', votos: 2},
          ]},
          {id: 4, titulo:'minha pergunta c?',
          alternativas: [
            {id: 1, titulo: 'alternativa a', votos: 0},
            {id: 2, titulo: 'alternativa b', votos: 0},
            {id: 3, titulo: 'alternativa c', votos: 5},
          ]},
          {id: 5, titulo:'minha pergunta d?',
          alternativas: [
            {id: 1, titulo: 'alternativa a', votos: 0},
            {id: 2, titulo: 'alternativa b', votos: 1},
            {id: 3, titulo: 'alternativa c', votos: 4},
          ]},
          {id: 6, titulo:'minha pergunta d?',
          alternativas: [
            {id: 1, titulo: 'alternativa a', votos: 0},
            {id: 2, titulo: 'alternativa b', votos: 1},
            {id: 3, titulo: 'alternativa c', votos: 4},
          ]},
        ]
      }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Sala: ${navigation.state.params.titulo || 'Não localizado'}`
  });
  
  handleSubmit=()=>{}

  componentWillMount() {
    const  questoes = this.props.navigation.getParam('questoes', null);
    const  votantes = this.props.navigation.getParam('votantes', null);
    
    if(questoes)
      this.setState({questoes});
    if(votantes)
      this.setState({votantes, qtdVotantes: votantes.length});
  }

  renderItem = ({ item, index }) => {
    const { qtdVotantes } = this.state;
    const alfabeto = ['a', 'b',	'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
    return (
      <View>
        <QuestaoCard key={item.pergunta} text={`Q${index+1}. ${item.pergunta}`}/>
        {
          item.alternativas.map((alternativa, index) => {
            return (
              <View key={index + 1 } style={andamento.alternativas}>
                <IndiceAlternativa indice={`${alfabeto[index]})`} />
                <BarraProgresso progresso={(alternativa.votos/qtdVotantes)*100} />
                <Text>{(alternativa.votos/qtdVotantes)*100}%</Text>
                {/*<Text>{alternativa}</Text>*/}
              </View>
              );
          })
        }
      </View>
    )
  };

  render() {
    const { questoes } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            style={{ marginTop: 20 }}
            data={questoes}
            numColumns={1}
            renderItem={this.renderItem}
            keyExtractor={(index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}