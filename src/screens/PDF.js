import React from 'react';
import { StyleSheet, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import { Constants } from 'expo';

export default class PDF extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PDFReader
          source={{ uri: "https://firebasestorage.googleapis.com/v0/b/votacaoonline-fc914.appspot.com/o/sala%2Fpdfs%2Fambiente-de-desenvolvimento-rn.pdf?alt=media&token=649574db-8837-453e-aff0-6ec8929017b7" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 50,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});