import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet} from 'react-native';
import BotaoNovaSala from '../components/BotaoNovaSala';
import styles from './estilos'

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