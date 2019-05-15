import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const Descricao = ({ titulo, texto }) => {
  return(
    texto || titulo ?
    <View style={styles.container}>
      {titulo && <Text style={styles.titulo}>{titulo}</Text>}
      {texto && <Text style={styles.texto}>{texto}</Text>}
    </View>
    : false
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  titulo: {
    color: '#7500CF',
    fontSize: 18
  },
  texto: {
    textAlign: 'left',
    color: 'black',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 16
  }
});

export default Descricao;

Descricao.propTypes = {
  texto: PropTypes.string,
  texto: PropTypes.string
}

Descricao.defaultPropTypes = {
  texto: "",
  texto: PropTypes.string.titulo,
}