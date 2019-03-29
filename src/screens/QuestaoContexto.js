import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoProximo from '../components/botaoProximo';

export default class QuestaoContexto extends Component {  

  static navigationOptions = {
    title: 'Contexto da Questão',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Descricao e PDF da questao</Text>
          
          <Button
            title="Voltar tela inicial da questao"
            color="blue"
            onPress={() => this.props.navigation.navigate('Questao')}
          />
        </View>
        
        <BotaoProximo 
          endereco='QuestaoNovamente' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});