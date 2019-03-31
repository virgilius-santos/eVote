import React, { Component } from 'react';  
import { View, Text, Alert } from 'react-native';
import { DocumentPicker } from 'expo';
import { app } from '../config';

import BotaoAnterior from '../components/BotaoAnterior';
import BotaoEnvioArquivo from '../components/BotaoEnvioArquivo'
import BotaoProximo from '../components/BotaoProximo';
import InputTexto from '../components/InputTexto';
import styles from '../styles/estilos';
import salaStyles from '../styles/salaStyles';

export default class SalaContexto extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      informacoes: "",
      erro: "",
      document: null
    };
  }
  static navigationOptions = {
    title: 'Criar Sala',
  };

  handleFile = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    Alert.alert("Arquivo - Aguarde alguns segundos \n URI para upload: ", result.uri);

    if (!result.cancelled) {
      this.upload(result.uri, result.name)
        .then(() => {
          alert("Upload concluído");
        })
        .catch((error) => {
          console.warn("Falha no upload" + error);
        });
    }
  }

  urlToBlob = (uri) => {
    //reference: https://github.com/expo/expo/issues/2402
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response); // when BlobModule finishes reading, resolve with the blob
      };
      xhr.onerror = function() {
        reject(new TypeError('Network request failed')); // error occurred, rejecting
      };
      xhr.responseType = 'blob'; // use BlobModule's UriHandler
      xhr.open('GET', uri, true); // fetch the blob from uri in async mode
      xhr.send(); // no initial data
    });
  }

  upload = async (uri, name) => {
    const blob = await this.urlToBlob(uri);
    const ref = app.storage().ref().child('pdfs/'+name);
    const snap = await ref.put(blob);
    const remoteUri = await snap.ref.getDownloadURL();
    this.setState({ document: uri });

    blob.close();
    return remoteUri;
  }

  handleInfo = (value) => {
    this.setState({informacoes: value});
  }

  handleSubmit = () => {
    //código
  } 

  render() {
    let { document } = this.state;
    const { informacoes } = this.state;
    return (
      <View style={styles.container}>
        <View styles={styles.innerContainer}>
          <Text style={styles.title2}>Informações que ficarão em destaque:</Text>
          
          <BotaoEnvioArquivo
            style={salaStyles.button}
            texto="Anexar PDF"
            onPress={this.handleFile}
          />

          <InputTexto
            style={salaStyles.input}
            label="Informações adicionais"
            multiline
            onChangeText={value => this.handleInfo(value)}
            value={informacoes}
          />

          {document ? <Text>Foi feito upload do arquivo: {document}</Text>
            :
            <Text>Nenhum arquivo inserido.</Text>
          }    
        </View>
        
        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior 
            endereco='Sala' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
          <BotaoProximo
            onPress={this.handleSubmit()}
            endereco='Questao' 
            navigation={this.props.navigation} 
            style={styles.icon} 
          />
        </View>
      </View>
    );
  }
}