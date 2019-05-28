import React, { Component } from 'react';  
import { View, Image, TextInput, TouchableOpacity,Text, StyleSheet } from 'react-native';
import { auth } from '../config';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
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
        .then((data) => this.props.navigation.navigate('Inicio'))
        .catch(error => this.setState({ errorMessage: 'E-mail ou senha incorreta' }))
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
              onPress={() => this.handleLogin()}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
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