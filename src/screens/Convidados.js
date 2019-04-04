import React, { Component } from 'react';  
import { Button, View, Text, Alert, StyleSheet, FlatList, ItemSeparatorComponent} from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import styles from '../styles/estilos';

export default class Convidados extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      convidados: ["Convidado0", "Convidado1", "Convidado2", "Convidado3"]
    }
  }

  static navigationOptions = {
    //TODO PUXAR O TITULO DA SALA
    title: 'Sala: Titulo' ,
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={this.state.convidados}
            numColumns= {1}
            renderItem={({ item, index }) => (
              <Text>{item} index:{index}</Text>
              
            )}
          />
        </View>
        <Button
            title="Salvar Sala"
            color="purple"
            onPress={() => {Alert.alert('Sala salva!'), this.props.navigation.navigate('Inicio')}}
          />
      </View>
    );
  }
}