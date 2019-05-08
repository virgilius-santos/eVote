import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const BotaoRemoveAlternativa = ({ onPress }) => (
  <TouchableOpacity 
    onPress={onPress}
  >
    <Icon style={styles.icon} 
      name="ios-remove-circle" size={60} 
      color="#7500CF" 
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

export default BotaoRemoveAlternativa;

BotaoRemoveAlternativa.propTypes = {
  onPress: PropTypes.func.isRequired
}