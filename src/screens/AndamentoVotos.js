import React, { Component } from 'react'; 
import { View, FlatList } from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoProximo from '../components/BotaoProximo';
import QuestaoCard from '../components/QuestaoCard';
import styles from '../styles/estilos';
import { ScrollView } from 'react-native-gesture-handler';

export default class Andamento extends Component {
  constructor(props) {
      super(props);
      this.state = {}
  }
  static navigationOptions = {
      title: 'Sala: Cores pro App',
  };
  
  handleSubmit=()=>{}

  render() {
    return (
      <View style={styles.container}>
        <View>
          <QuestaoCard text="Questmxkcmkxkcxkckkckxmckmxkmccmxcxncxkcmkxmckmxkcmxkcmkkxmkcmlkxmckmxmcmkmlcmxmclkmxlmao1"/>
          <QuestaoCard text="Questmxkcmkxkcxkckkckxmckmxkmccmxcxncxkcmkxmckmxkcmxkcmkkxmkcmlkxmckmxmcmkmlcmxmclkmxlmao1"/>
        </View>
        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior 
            endereco='Andamento' 
            navigation={this.props.navigation} 
          />
          <BotaoProximo
            endereco='Inicio'
            onPress={() => this.handleSubmit()}
          />
        </View>
      </View>
    );
  }
}