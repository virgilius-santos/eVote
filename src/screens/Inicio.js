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
            title="Criar uma sala"
            color="green"
            onPress={() => this.props.navigation.navigate('Sala')}
          />
        </View>
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