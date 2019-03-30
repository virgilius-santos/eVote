import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class BotaoMedio extends Component {
  constructor(props) {
    super(props);
  }

	render() {
    const { backgroundColor, texto, onPress} = this.props;
		return (
			<TouchableOpacity 
        style={[styles.buttonStyle, {backgroundColor: backgroundColor}]}
				onPress={onPress}
		  >
        <Text style={styles.textStyle}>
          {texto}
        </Text>
		  </TouchableOpacity>
		);
	}
}

BotaoMedio.propTypes = {
  texto: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
		borderRadius:35,
    height: 60,
    justifyContent: 'center',
    margin: 10,
    width: 210,
	},
	textStyle: {
		color: '#ffffff',
		fontWeight: '500',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default BotaoMedio;