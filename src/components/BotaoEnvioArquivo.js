import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class BotaoEnvioArquivo extends Component {
	render() {
		const { texto, onPress} = this.props;
		return (
		  <TouchableOpacity style={styles.buttonStyle}
			onPress={() => onPress()}
		  >
			 <Text style={styles.textStyle}>{texto}</Text>
		  </TouchableOpacity>
		);
	}
}

BotaoEnvioArquivo.propTypes = {
  texto: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize:20,
	color: '#ffffff',
	textAlign: 'center'
  },
  
  buttonStyle: {
	padding:10,
	backgroundColor: '#202646',
	borderRadius:20
  }
});

export default BotaoEnvioArquivo;