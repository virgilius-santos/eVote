import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const BotaoProximo = ({ endereco, navigation }) => (
  <TouchableOpacity 
    onPress={() => navigation.navigate(endereco)}
  >
    <Icon style={styles.icon} 
      name="md-arrow-forward" size={50} 
      color="#8400C5" 
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

export default BotaoProximo;

BotaoProximo.propTypes = {
  endereco: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}