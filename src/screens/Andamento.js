import React, {Component} from 'react'; 
import {Text,View,StyleSheet} from 'react-native';
import BotaoAnterior from '../components/BotaoAnterior';//componentes criados
import BotaoProximo from '../components/BotaoProximo'; //componentes criados
import styles from '../styles/estilos';
import StatusVotacao from '../components/StatusVotacao';

export default class Andamento extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Sala: Cores pro App',
      };
      handleSubmit=()=>{

      }
      render() {

        return (
        <View style={styles.container}>
        <Text>
            Essa sala foi criada para decidirmos o layout do aplicativo pooler da Ages 2019/1, o E-Vote. Agente precsa de um texto longo pa oi sajsk
        </Text>
        <View style = {styles.statusStyle}>
        <StatusVotacao tipo = 'outro' texto = "33% dos usuários já votaram"/>
        <StatusVotacao tipo = 'hora' texto = "A votação encerra as 06h do dia 13/03"/>
        </View>
        <View style={styles.flowButtonsContainer}>
        <BotaoAnterior 
          endereco='Inicio' 
          navigation={this.props.navigation} 
        />
        <BotaoProximo
          endereco='SalaContexto'
          onPress={() => this.handleSubmit()}
        />
      </View>
      </View>
            );
        }
}
const statusStyle = StyleSheet.create({
  status: {
    
    alignItems: "center"
  }
});