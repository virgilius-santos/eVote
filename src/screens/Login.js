import React, { Component } from 'react';  
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/estilos';


export default class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          salas: {}
        }      
    }

    static navigationOptions = {
        title: 'Login',
    };

    render(){
      return(
        <View style={styles.container}>


            </View>
        );  
     }

}