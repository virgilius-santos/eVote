import React, { Component } from 'react';  
import { View, FlatList, StyleSheet, Text } from 'react-native';
import BotaoProximo from '../components/BotaoProximo';
import BotaoAnterior from '../components/BotaoAnterior';
import styles from '../styles/estilos';
import BotaoMedio from '../components/BotaoMedio';

export default class QuestaoSalva extends Component {  

  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          "id" : 1,
          "titulo" : "This is the first question"
        },
        {
          "id" : 2,
          "titulo" : "Essa é a segunda questão Essa é a segunda questão Essa é a segunda questão Essa é a segunda questão Essa é a segunda questãoEssa é a segunda questão Essa é a segunda questão Essa é a segunda questão Essa é a segunda questão Essa é a segunda questão Essa é a segunda questão Essa é a segunda questão Essa é a segunda questão Essa é a segunda questão"
        },
        {
          "id" : 3,
          "titulo" : "To je třetí otázka"
        },
        {
          "id" : 4,
          "titulo" : "これは4番目の質問です これは4番目の質問です これは4番目の質問です これは4番目の質問です これは4番目の質問です これは4番目の質問です これは4番目の質問です これは4番目の質問です これは4番目の質問です"
        },
        {
          "id" : 5,
          "titulo" : "これは4番目の質問です"
        },
        {
          "id" : 6,
          "titulo" : "これは4番目の質問です"
        },
        {
          "id" : 7,
          "titulo" : "これは4番目の質問です"
        },
        {
          "id" : 8,
          "titulo" : "これは4番目の質問です"
        }
      ],
    };
  }

  renderItem = ({ item, index }) => (
    <View style={custom.listItem}>
      <Text style={{color: '#727272'}}>
        <Text style={{color: '#00C551'}}>Questão {index+1}: </Text>
        {item.titulo}
      </Text>
    </View>
  );

  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <Text style={custom.titulo}>Questão 1 adicionada!</Text>
          <BotaoMedio
            backgroundColor='#00E576'
            onPress={() => this.props.navigation.navigate('Questao')}
            texto='Adicionar mais questões'
          />

          <Text style={[custom.titulo, {fontSize: 16}]}>Questões já adicionadas ({data.length}):</Text>
        </View>
        
        <View style={{flex: 7}}>
          <FlatList
            contentContainerStyle={custom.list}
            data={data}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
          />

        </View>

        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior 
            endereco='QuestaoContexto' 
            navigation={this.props.navigation}
          />
          <BotaoProximo
            endereco='Convidados' 
            navigation={this.props.navigation} 
          />
        </View>
      </View>
    );
  }
}

const custom = StyleSheet.create({
  titulo: {
    alignSelf: 'center',
    color: '#8400C5',
    fontSize: 20,
    fontWeight: 'bold'
  },

  list: {
    paddingHorizontal: 20
  },

  listItem: {
    marginTop: 20,
    paddingVertical: 5
  },
});