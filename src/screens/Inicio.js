import React, { Component } from 'react';  
import { Button, View, Text, StyleSheet} from 'react-native';
import BotaoProximo from '../components/botaoProximo';

export default class Home extends Component {  
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Inicio</Text>

          <Button
            title="Criar Sala"
            color="green"
            onPress={() => this.props.navigation.navigate('Sala')}
          />
        </View>

        <BotaoProximo 
          endereco='Convidados' 
          navigation={this.props.navigation} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});