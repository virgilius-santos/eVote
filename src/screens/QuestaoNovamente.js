import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoProximo from '../components/botaoProximo';

export default class QuestaoNovamente extends Component {  

  static navigationOptions = {
    title: 'Questão Finalizada',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Prossiga ou crie outra questão</Text>
          
          <Button
            title="Criar outra questão"
            color="blue"
            onPress={() => this.props.navigation.navigate('Questao')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});