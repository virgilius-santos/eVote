import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BotaoAnterior = ({ endereco, navigation, disabled }) => (
  <TouchableOpacity 
    disabled={disabled}
    onPress={() => navigation.navigate(endereco)}
  >
    <Icon style={styles.icon} 
      name="md-arrow-back" size={50} 
      color={ disabled ? 'gray' : "#8400C5"}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
});

export default BotaoAnterior;

BotaoAnterior.propTypes = {
  disabled: PropTypes.bool,
  endereco: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}

BotaoAnterior.defaultPropTypes = {
  disabled: false
}