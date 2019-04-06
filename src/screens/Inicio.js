import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';

import React, { Component } from 'react';  
import { View } from 'react-native';
import BotaoNovaSala from '../components/BotaoNovaSala';
import styles from '../styles/estilos';
import SemSalas from '../containers/SemSalas';

class Inicio extends Component {  
  constructor(props) {
    super(props) 
    this.state = {
      salas: {}
    }
  }
  static navigationOptions = {
    title: 'Votações disponíveis',
  };

  render() {
    return (
      <View style={styles.container}>
        <View>

          <SemSalas 
            texto="No momento você não possui salas de votação disponíveis!"
          />

        </View>
        
        <BotaoNovaSala 
          endereco='Sala' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    sala: state.salaReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
