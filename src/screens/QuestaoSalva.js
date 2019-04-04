import React, { Component } from 'react';  
import { Button, View, FlatList, StyleSheet, Text } from 'react-native';
import BotaoProximo from '../components/BotaoProximo';
import styles from '../styles/estilos';

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
          "titulo" : "Essa é a segunda questão"
        },
        {
          "id" : 3,
          "titulo" : "To je třetí otázka"
        },
        {
          "id" : 4,
          "titulo" : "これは4番目の質問です"
        },
        {
          "id" : 4,
          "titulo" : "これは4番目の質問です"
        },
        {
          "id" : 4,
          "titulo" : "これは4番目の質問です"
        },
        {
          "id" : 4,
          "titulo" : "これは4番目の質問です"
        },
        {
          "id" : 4,
          "titulo" : "これは4番目の質問です"
        }
      ],
    };
  }

  renderItem = ({ item }) => (
    <View style={custom.listItem}>
      <Text>Q{item.id}: {item.titulo}</Text>
    </View>
  );
 

  static navigationOptions = {
    title: 'Questão Finalizada',
    headerLeft: null
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Button
            title="Criar outra questão"
            color="purple"
            onPress={() => this.props.navigation.navigate('Questao')}
          />
        </View>
        
        <View>
        <FlatList
          style={{ marginTop: 30 }}
          contentContainerStyle={custom.list}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />

        </View>


        <BotaoProximo 
          endereco='Convidados' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}

const custom = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },
});