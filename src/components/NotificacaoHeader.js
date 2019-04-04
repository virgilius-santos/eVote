import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const NoticacaoHeader = ({ texto }) => (
  <View style={styles.container}>
    <Text style={styles.font}>{texto}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0
  },
  font: {
    color: '#9D9C9D',
    fontSize: 12,
    padding: 0,
    textAlign: 'center'
  }
});

export default NoticacaoHeader;

NoticacaoHeader.propTypes = {
  texto: PropTypes.string.isRequired
};
