import React, { Component } from "react"
import PropTypes from 'prop-types';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

class BoxComponent extends Component {
           
  state = {
    data: [
      { id: "00", name: "Relâmpago McQueen" },
      { id: "01", name: "Agente Tom Mate" },
      { id: "02", name: "Doc Hudson" },
      { id: "03", name: "Cruz Ramirez" }
    ]
  };
            
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    color: "#333333"
  }
});
export default App;