import React, {Component} from 'react'; 
import { Text ,View} from 'react-native';//componentes padrao
import BotaoAnterior from '../components/BotaoAnterior';//componentes criados
import BotaoProximo from '../components/BotaoProximo'; //componentes criados
import styles from '../styles/estilos';

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
            andamento
        </Text>

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