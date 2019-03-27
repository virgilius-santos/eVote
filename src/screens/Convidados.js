import React, { Component } from 'react';  
import { Button, View, Text, Alert, StyleSheet } from 'react-native';
import BotaoProximo from '../components/botaoProximo';

export default class Home extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Selecionando Convidados</Text>
          
          <Button
            title="Voltar para questões"
            color="blue"
            onPress={() => this.props.navigation.navigate('Questao')}
          />
          <Button
            title="Submeter Sala"
            color="green"
            onPress={() => Alert.alert('Final do Fluxo')}
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