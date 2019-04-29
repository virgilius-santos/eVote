import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo'

export default class CardSalaVotacao extends Component {
  constructor(props){
    super(props)
  }
 
  render(){
    return (
    <View style={styles.container}>
      <LinearGradient
          colors={['#00C551', '#03923E']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}>
          
          <Text style={styles.titulo}>
          Esta é uma sala de votação
        </Text>
        <Text style={styles.subtitulo}>
          A votação vai, aconteceu, e acabou...
        </Text>
      
      </LinearGradient>

      
        
        
    </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 12,
    marginTop: 22,
    alignItems: "center",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  titulo: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'normal',
    color: "white",
  },
  subtitulo: {
    textAlign: 'left',
    fontSize: 17,
    fontWeight: 'normal',
    color: "black",
  },
});