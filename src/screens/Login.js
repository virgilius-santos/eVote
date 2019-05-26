import React, { Component } from 'react';  
import { View, Text, ScrollView, TouchableOpacity, Alert, Button, StyleSheet, StatusBar } from 'react-native';
import styles from '../styles/estilos';
import LoginForm from '../components/LoginForm';


export default class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          salas: {},
          email_cpf: '',
          senha: ''
        }      
    }

    handleLogin = () => {
      const { email, pasword } = this.state
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Inicio'))
        .catch(error => this.setState({ errorMessage: error.message }))
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
          <TextInput style = {styles.loginInput} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next"
               onChangeText={email => this.setState({ email })}
               value={this.state.email} 
               placeholder='Email ou CPF' 
               placeholderTextColor='rgba(225,225,225,0.7)'/>

            <TextInput style = {styles.loginInput}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Senha'
              onChangeText={password => this.setState({ password })}
              value={this.state.password} 
              placeholderTextColor='rgba(225,225,225,0.7)' 
              secureTextEntry/>

                <TouchableOpacity style={styles.loginButtonContainer} 
                     onPress={onButtonPress}>
                    <Text  style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity> 
            
          </View>
        </View>
        );  
     }

}