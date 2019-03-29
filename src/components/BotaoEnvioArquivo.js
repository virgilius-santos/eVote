import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class BotaoEnvioArquivo extends Component {
	render() {
		const { texto, onPress} = this.props;
		return (
			<TouchableOpacity 
				style={styles.buttonStyle}
				onPress={() => onPress()}
		  >
				<View style={styles.sideBYside}>
					<Icon style={styles.icon} 
						name="cloud-upload" size={50} 
						color="#C08AE9" 
					/>
					<Text style={styles.textStyle}>
						{texto}
					</Text>
				</View>
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
    fontSize:30,
		color: '#ffffff',
		textAlign: 'center'
  },
  
  buttonStyle: {
		padding:10,
		backgroundColor: "#7500CF",
		borderRadius:20
	},
	sideBYside:{
		flexDirection: 'row',
	}
});


export default BotaoEnvioArquivo;