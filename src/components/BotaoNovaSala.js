import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BotaoNovaSala = ({ endereco, navigation, color }) => (
  <TouchableOpacity
    style={{ position: 'absolute', bottom: 50, right: 0, zIndex: 5, elevation: 5 }}
    onPress={() => navigation.navigate(endereco)}
  >
    <Icon style={styles.icon} 
      name="ios-add-circle" size={80} 
      color={color} 
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    paddingLeft: 10,
    paddingRight: 5,
    paddingBottom: 10
  },
});

export default BotaoNovaSala;

BotaoNovaSala.propTypes = {
  endereco: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}