import React, { Component } from 'react';  
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/estilos';
import LoginForm from '../components/LoginForm';


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
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require("./assets/icon.png")} />
         </View>

          <View style={styles.formContainer}>
            <LoginForm />
          </View>
        </View>
        );  
     }

}