import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class BotaoEnvioArquivo extends Component {
	constructor(props){
		super(props);
	}
	handleStatusUpload = () => {
    const { loading } = this.props;
    if(loading==undefined)
      return 'Nenhum arquivo inserido ainda.';
    if(loading)
      return 'Carregando...';
    else {
      return 'Arquivo inserido com sucesso';
    }
	}
	render() {
		const { texto, onPress, style, loading} = this.props;
		return (
			<View>
				<View style={styles.container}>
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
					{loading && <ActivityIndicator 
						style={styles.iconStatusLoading}
						animating={loading}
						size="large"
						color="#00DC7B"
					/>}
					{loading !== undefined && !loading &&
						<Icon 
							style={styles.iconStatusLoaded}
							name="md-checkmark-circle"
							size={30} color="#00DC7B"
						/>
					}
				</View>
				<Text style={styles.status}>{loading}{this.handleStatusUpload()}</Text>
			</View>
		);
	}
}

BotaoEnvioArquivo.propTypes = {
  texto: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	style: PropTypes.style,
	loading: PropTypes.bool
};

BotaoEnvioArquivo.defaultProps = {
	loading: undefined,
	style: undefined
};

const styles = StyleSheet.create({
  buttonStyle: {
		alignSelf: 'center',
		backgroundColor: "#7500CF",
		borderRadius:35,
		height: 60,
		padding: 10,
		width: 210
	},
	container:{
		flexDirection: 'row',
		justifyContent: 'center'
	},
	icon: {
		marginTop: 3,
		paddingBottom: 0,
		paddingTop: 0
	},
	iconStatusLoaded: {
		justifyContent: 'flex-end',
		marginLeft: 5,
		marginTop: 45
	},
	iconStatusLoading: {
		justifyContent: 'center',
		marginLeft: 5,
		marginTop: 22
	},
	sideBYside:{
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	status: {
		alignSelf: 'flex-start',
		color: "#9B9B9B",
		fontSize: 12,
		marginLeft: "22%"
	},
	textStyle: {
		color: '#ffffff',
		fontWeight: '500',
    fontSize: 14,
		paddingTop: 10
  }
});


export default BotaoEnvioArquivo;