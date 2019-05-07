import React, { Component } from 'react';  
import { View } from 'react-native';
import styles from '../styles/estilos';
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

  render() {
    return (
      <View style={styles.container}>
        <View>
          <SemSalas 
            texto="No momento você não possui histórico de votações"
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
