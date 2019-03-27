import React, { Component } from 'react';  
import { Button, View, Text, Alert } from 'react-native';
import Sala from '../Models/Sala.model';

import { db } from '../config';

let submeterSala = sala => {  
  db.ref('/salas').push(sala);
};

export default class Home extends Component {  
  
  sala = new Sala(
    'JM',
    'Opcoes do churrasco',
    'Isso tem que virar descrição e pdf',
    'Isso tem que virar as questões',
    'Isso tem que virar os convidados'
  )

  handleSubmit = () => {
    submeterSala(this.sala);
    Alert.alert('Sala salva.');
  };

  render() {
    return (
      <View>
        <Text>Criando Sala</Text>
        
        <Button
          title="Voltar tela de Inicio"
          color="blue"
          onPress={() => this.props.navigation.navigate('Inicio')}
        />        
        <Button
          title="Testar SalaFactory!"
          color="red"
          onPress={() => this.handleSubmit()}
        />
        <Button
          title="Criar questões"
          color="green"
          onPress={() => this.props.navigation.navigate('Questao')}
        />
      </View>
    );
  }
}