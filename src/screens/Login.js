import React, { Component } from 'react';
import { Button, View, Image, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { auth } from '../config';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import styles from '../styles/estilos';
import * as Google from 'expo-google-app-auth';
import Aviso from '../components/Aviso';
import InputTexto from '../components/InputTexto';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      salas: {},
      email: 'email@id.com',
      senha: '123456',
      errorMessage: '',
      cpf: '',
      errorCPF: '',
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }

  handleLogin = () => {
    const { email, senha } = this.state;
    auth
      .signInWithEmailAndPassword(email, senha)
      .then((data) => {
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
    title: 'Bem-vindo ao eVote!'
  };

  static getUID = () => {
    return AsyncStorage.getItem()
  }

  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: "371935973503-o9am7dvbrc6rk6ta5j0grbsndnlk0mcg.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        console.log("RESULTADO", result)
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          email:result.user.email
        })
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled number="2">
        <View style={styles.loginContainer}>
          <Image resizeMode="contain" style={styles.logo} source={require("../../assets/icon.png")} />
        </View>
        <View style={{ flex: 3 }}>
          {
            this.state.signedIn ? (
              <View>
                <Text>Insira seu CPF para finalizar cadastro</Text>
                <Aviso texto={this.state.errorMessage} />
                <InputTexto
                  label="CPF"
                  value={this.state.cpf}
                  onChangeText={cpf => this.setState({ cpf, errorCPF: '', errorMessage: '' })} />
              </View>
            ) : (
                <View>
                  <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require("../../assets/icon.png")} />
                  </View>

                  <InputEmail
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    label={'login'}
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    placeholder='E-mail' />

                  <InputSenha
                    autoCorrect={false}
                    returnKeyType="go"
                    placeholder='Senha'
                    label={'senha'}
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha} />

                  <Text style={custom.notice}>
                    {this.state.errorMessage}
                  </Text>
                </View>
              )}
        </View>
        <View style={{ flex: 3, backgroundColor: 'white' }}>
          <TouchableOpacity style={styles.loginButtonContainer}
            onPress={() => { this.setState({ errorMessage: 'Por favor, aguarde.' }), this.handleLogin() }}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButtonContainer}
            onPress={() => this.props.navigation.navigate('TelaCadastro')}>
            <Text style={styles.loginButtonText}>Cadastrar</Text>
          </TouchableOpacity>

          <LoginPage signIn={this.signIn} />

        </View>

      </KeyboardAvoidingView>
    );
  }
}

const custom = StyleSheet.create({
  notice: {
    color: '#8400C5',
    textAlign: 'center'
  }
});

const LoginPage = props => {
  return (
    <View>
      <Button style={{ marginTop: 15 }} title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View style={googleStyle.container}>
      <Text style={googleStyle.header}>Welcome:{props.name}</Text>
      <Image style={googleStyle.image} source={{ uri: props.photoUrl }} />
    </View>
  )
}

const googleStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 3,
    borderRadius: 150
  }
})

isCPFValido = async () => {
  let Soma;
  let Resto;
  let validated = true;
  Soma = 0;
  if (this.state.cpf.length != 11) {
    return this.setState({ errorCPF: 'CPF deve ter 11 numeros' });
  }

  if (this.state.cpf == "00000000000") validated = false;

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(this.state.cpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(this.state.cpf.substring(9, 10))) validated = false;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(this.state.cpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(this.state.cpf.substring(10, 11))) validated = false;

  if (validated == false) this.setState({ errorCPF: 'CPF inválido' });

  const usersCount = await new Promise(resolve => {
    db.ref('usuarios').orderByChild('cpf').equalTo(this.state.cpf).on('value', (snapshot) => {
      resolve(snapshot.numChildren());
    });
  });

  if (usersCount > 0) {
    validated = false;
    this.setState({ errorCPF: 'CPF já está em uso' });
  }

  return validated;
}
