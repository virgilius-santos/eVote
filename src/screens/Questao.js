import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet } from 'react-native';
import BotaoProximo from '../components/botaoProximo';

export default class Questao extends Component {  

  static navigationOptions = {
    title: 'Elaboração da Questão',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Coletando dados das questoes</Text>
          
          <Button
            title="Voltar tela da sala"
            color="blue"
            onPress={() => this.props.navigation.navigate('Sala')}
          />
        </View>
        
        <BotaoProximo 
          endereco='QuestaoContexto' 
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