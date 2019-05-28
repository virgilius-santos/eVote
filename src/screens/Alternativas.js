import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import BotaoAlternativa from '../components/BotaoAlternativa';
import styles from '../styles/estilos';

export default class Alternativas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { alternativas, selected } = this.props;
    return (
      <View style={styles.container}>
        {alert(JSON.stringify(alternativas))}
          <FlatList
            style={{ marginTop: 20 }}
            data={alternativas}
            numColumns={1}
            renderItem={({ item, index }) => (
              <View>
                <BotaoAlternativa
                  key={index}
                  onPress={() => this.handleSelect(index)}
                  index={index}
                  text={item}
                  selected={true}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
      </View>

    )
  }
}