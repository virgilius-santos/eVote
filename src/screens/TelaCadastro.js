import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity,Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import InputTexto from '../components/InputTexto';
import styles from '../styles/estilos';
import DateInput from '../components/DateInput';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoGrande from '../components/BotaoGrande';
import { auth } from '../config';


export default class TelaCadastro extends Component{
    constructor(props) {
        super(props) 
        this.state = {
          salas: {},
          email: '',
          senha: '',
          cpf: '',
          nome: '',
          errorMessage: '',
          errorEmail: '',
          errorSenha: '',
          errorCPF: '',
          errorNome: ''
        }      
    }

    validate = () => {
        let error = '';
    
        if(!isEmailValido){
            error = 'email'
        }else if(!isSenhaValido){
            error = 'senha'
        }else if(!isNomeValido){
            error = 'nome'
        }else if(!isCPFValido){
            error = 'cpf'
        }

        switch(error) {
            case 'email': 
              return this.setState({errorMessage: errorEmail})
            case 'senha': 
              return this.setState({errorMessage: errorSenha})
            case 'nome':
              return this.setState({errorMessage: errorNome})
            case 'cpf':
              return this.setState({errorMessage: errorCPF})
            default:
            //enviar informações para o Real Time Database e fazer a autenticação do usuário
              this.handleSignUp();
          }
      }

   
    handleSignUp = () => {
      auth
        .createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }   

    static navigationOptions = {
        title: 'Registrar',
    };


    render(){
        return(
        <KeyboardAvoidingView behavior={"padding"} style={styles.container} enabled number="2" >   
            <View style={{flex: 1} [styles.flowButtonsContainer, { marginTop: 5 }]}>
                <BotaoAnterior 
                    endereco='Login' 
                     navigation={this.props.navigation}
                /> 
                
                <InputTexto
                    label="Nome"
                    max={100}
                    value={this.state.nome}
                    onChangeText={nome => this.setState({ nome })}/>
                <InputEmail 
                    autoCorrect={false} 
                    keyboardType='email-address'
                    returnKeyType="next"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email} 
                    placeholder='E-mail' />
                <InputTexto
                    label= "CPF"
                    max={11}
                    value={this.state.cpf}
                    onChangeText={cpf => this.setState({ cpf })}/>
            </View>
            <View style={{flex: 2, backgroundColor: 'white'} }>
                <DateInput
                        titulo="Data de nascimento"
                />
                <InputSenha
                    autoCorrect={false} 
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Senha'
                    onChangeText={senha => this.setState({ senha })}
                    value={this.state.senha}
                />
                <InputSenha
                    autoCorrect={false} 
                    returnKeyType="go" 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Confirmar senha'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.senha}
                />
                <BotaoGrande
                    texto="Confirmar"
                    onPress={() => this.validate()}
                    endereco='Login' 
                    navigation={this.props.navigation} 
                />

                <Text style={custom.notice}> 
                        {this.state.errorMessage}
                </Text>
            </View>
    </KeyboardAvoidingView>      
        )
    }
}

// utilizada classe '../shared/validationUtil.js'
const isEmailValido = () => {
    if(this.state.email.includes('@'))return true
    this.setState({errorEmail : 'Email inválido'});
    return false
}
const isNomeValido = () => {
    if(this.state.nome.length > 0)return true
    this.setState({errorNome : 'Nome deve ter pelo menos um caracter'});
    return false
}

const isCPFValido = () => {
    let Soma;
    let Resto;
    Soma = 0;
  if (this.state.cpf == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(this.state.cpf.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(this.state.cpf.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(this.state.cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(this.state.cpf.substring(10, 11) ) ) return false;

    return true;
}

//Fazer validação para senha e confirmação de senha
const isSenhaValido = () => {
    if(this.state.senha.length > 6)return true;
    this.setState({errorSenha : 'Senha deve ter pelo menos 6 caracteres'});
    return false
}

