import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet} from 'react-native';
import BotaoProximo from '../components/botaoProximo';
import BotaoNovaSala from '../components/botaoNovaSala';

export default class Inicio extends Component {  

  static navigationOptions = {
    title: 'Bem-vindo!',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
        </View>

        <BotaoNovaSala 
          endereco='Sala' 
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