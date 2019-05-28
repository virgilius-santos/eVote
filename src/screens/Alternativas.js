import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
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
        <ScrollView style={[{ alignSelf: 'auto' }, { marginTop: 10 }]}>
          <FlatList
            style={{ marginTop: 20 }}
            data={alternativas}
            numColumns={1}
            renderItem={({ item, index }) => (
              <View>
                <Text>{item}</Text>

                <BotaoAlternativa
                  key={index}
                  onPress={() => this.handleSelect(index)}
                  index={index}
                  text={item}
                  selected={true}>
                </BotaoAlternativa>
              </View>

            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>

    )
  }
}