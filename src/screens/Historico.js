import React, { Component } from 'react';  
import { View } from 'react-native';
import styles from '../styles/estilos';
import CardSalaVotacao from '../components/CardSalaVotacao';
import SemSalas from '../containers/SemSalas';
import Barra from '../components/Barra'

class Historico extends Component {  
  constructor(props) {
    super(props) 
    this.state = {
      salas: {}
    }
  }
  static navigationOptions = {
    title: 'Histórico de Votações',
  };

  handleVisualizar = (titulo) => {
    if (titulo)
      this.props.navigation.navigate('Andamento', { 'titulo': titulo });
    else
      this.props.navigation.navigate('Andamento', { 'titulo': 'Não disponível' });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <CardSalaVotacao
            key={1}
            onPress = {() => this.handleVisualizar('Assembleia 1')}
            status='encerrada'
            mensagem='Votação do Sicredi'
            titulo='Assembleia 1'
          />
          <CardSalaVotacao
            key={2}
            onPress = {() => this.handleVisualizar('Assembleia 2')}
            status='encerrada'
            mensagem='Votação do Sicredi - centro'
            titulo='Assembleia 2'
          />
        </View>

        <Barra 
          index = {true}
          onPress={() => this.props.navigation.navigate('Inicio')} />
      </View>
    );
  }
}
export default Historico;
