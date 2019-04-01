import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class BotaoEnvioArquivo extends Component {
	render() {
		const { texto, onPress, style} = this.props;
		return (
			<TouchableOpacity 
				style={[styles.buttonStyle, style]}
				onPress={onPress}
		  >
				<View style={styles.sideBYside}>
					<Icon style={styles.icon} 
						name="md-cloud-upload" size={35} 
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
	onPress: PropTypes.func.isRequired,
	style: PropTypes.style
};

BotaoEnvioArquivo.defaultProps = {
	style: undefined
};

const styles = StyleSheet.create({
  buttonStyle: {
		backgroundColor: "#7500CF",
		borderRadius:35,
		height: 60,
		padding:10,
		width: 210,
	},
	icon: {
		marginTop: 3,
		paddingBottom: 0,
		paddingTop: 0,
	},
	sideBYside:{
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	textStyle: {
		color: '#ffffff',
		fontWeight: '500',
    fontSize: 14,
		paddingTop: 10
  }
});


export default BotaoEnvioArquivo;