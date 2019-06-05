import React, { Component } from 'react';  
import { View, Image, TextInput, TouchableOpacity,Text, StyleSheet, AsyncStorage } from 'react-native';
import { auth } from '../config';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import styles from '../styles/estilos';
import AuthService from '../shared/AuthService';

export default class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
          salas: {},
          email: 'dev@evote.com',
          senha: '123456',
          errorMessage:''
        }      
    }

    handleLogin = () => {
      const { email, senha } = this.state
      auth
        .signInWithEmailAndPassword(email, senha)
        .then((data) => {
          console.log(JSON.stringify(data));
          // AuthService.setUID(data.user.uid).then(
          AsyncStorage.setItem('@UID', data.user.uid).then(
            () => this.props.navigation.navigate('Inicio')
          )
        })
        .catch(error => {
          console.log(error);
          this.setState({ errorMessage: 'E-mail ou senha incorretos.' })
        })
    }

    static navigationOptions = {
        title: 'Bem-vind@ ao eVote!',
    };

    static getUID = () => {
      return AsyncStorage.getItem()
    }

    render(){
      return(
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <Image resizeMode="contain" style={styles.logo} source={require("../../assets/icon.png")} />
          </View>
          <View style={{flex: 1}}>
            <InputEmail 
                autoCorrect={false} 
                keyboardType='email-address'
                returnKeyType="next"
                onChangeText={email => this.setState({ email })}
                value={this.state.email} 
                placeholder='E-mail' />

              <InputSenha   
                autoCorrect={false} 
                returnKeyType="go" 
                ref={(input)=> this.passwordInput = input} 
                placeholder='Senha'
                onChangeText={senha => this.setState({ senha })}
                value={this.state.senha}/>

              <Text style={custom.notice}> 
                {this.state.errorMessage}
              </Text>

          </View>
          <View style={{flex: 2, backgroundColor: 'white'}}>
            <TouchableOpacity style={styles.loginButtonContainer} 
              onPress={() => {this.setState({ errorMessage: 'Por favor, aguarde.' }), this.handleLogin()}}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity> 
          </View>

        </View>
        );  
     }

}

const custom = StyleSheet.create({
  notice:{
    color: '#8400C5',
    textAlign: 'center'
  }
});