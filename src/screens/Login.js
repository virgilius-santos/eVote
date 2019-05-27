import React, { Component } from 'react';  
import { View, Image, TextInput, TouchableOpacity,Text,Alert } from 'react-native';
import { auth } from '../config';
import InputTexto from '../components/InputTexto';
import styles from '../styles/estilos';





export default class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          salas: {},
          email: '',
          senha: '',
          errorMessage:''
        }      
    }

    handleLogin = () => {
      const { email, senha } = this.state
      auth
        .signInWithEmailAndPassword(email, senha)
        .then((data) => this.props.navigation.navigate('Sala'))
        .catch(error => this.setState({ errorMessage: 'Usuário ou senha incorreta' }))
    }

    static navigationOptions = {
        title: 'Login',
    };

    render(){
      return(
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require("../../assets/icon.png")} />
          </View>
          <View style={{flex: 1}}>
            <TextInput style = {styles.loginInput} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next"
               onChangeText={email => this.setState({ email })}
               value={this.state.email} 
               placeholder='Email ou CPF' 
               placeholderTextColor='rgba(0,0,0)'/>

            <TextInput style = {styles.loginInput}   
              returnKeyType="go" 
              ref={(input)=> this.passwordInput = input} 
              placeholder='Senha'
              onChangeText={senha => this.setState({ senha })}
              value={this.state.senha} 
              placeholderTextColor='rgba(0,0,0)' 
              secureTextEntry/>

            <Text> 
              {this.state.errorMessage}
            </Text>

            <TouchableOpacity style={styles.loginButtonContainer} 
                     onPress={() => this.handleLogin()}>
                    <Text  style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity> 
          </View>
          <View style={{flex: 2, backgroundColor: 'white'}} />

        </View>
        );  
     }

}