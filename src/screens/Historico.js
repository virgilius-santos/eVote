import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/';

import React, { Component } from 'react';  
import { View } from 'react-native';
import styles from '../styles/estilos';
import SemSalas from '../containers/SemSalas';

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
export default Historico;
