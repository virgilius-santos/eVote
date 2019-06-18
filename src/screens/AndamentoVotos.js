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
        qtdVotantes: 0,
        questoes: []
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

  getQtdVotos = (index) => {
    const { questoes } = this.state;
    let cont = 0;
    questoes[index].alternativas.map(alternativa => {
      cont = cont + alternativa[1];
    });
    return cont;
  }

  renderItem = ({ item, index }) => {
    const { qtdVotantes } = this.state;
    const alfabeto = ['a', 'b',	'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
    const totalDeVotos = this.getQtdVotos(index);
    return (
      <View>
        <QuestaoCard key={item.pergunta} text={`Q${index+1}. ${item.pergunta}`}/>
        {
          item.alternativas.map((alternativa, index) => {
            return (
              <View key={index + 1 } style={andamento.alternativas}>
                <IndiceAlternativa indice={`${alfabeto[index]})`} />
                <BarraProgresso progresso={Number(((alternativa[1]/totalDeVotos)*100).toFixed(1)) || 0} />
                <Text>{Number(((alternativa[1]/totalDeVotos)*100).toFixed(5)) || 0}%</Text>
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