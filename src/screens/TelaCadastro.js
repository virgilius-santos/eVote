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
    
        if(this.state.errorEmail != ''){
            error = 'email'
        }else if(this.state.errorSenha != ''){
            error = 'senha'
        }else if(this.state.errorNome != ''){
            error = 'nome'
        }else if(this.state.errorEmail != ''){
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
              //this.handleSignUp();
              () => this.props.navigation.navigate('Login')
          }
      }

    
    handleSignUp = () => {
      auth
        .createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then(
            //enviar informações para o Real Time Database e fazer a autenticação do usuário
            //this.sendData();
            () => this.props.navigation.navigate('Login')
            )
        .catch(error => this.setState({ errorMessage: error.message }))
    }   

    static navigationOptions = {
        title: 'Registrar',
    };

    
// utilizada classe '../shared/validationUtil.js'
isEmailValido = (entrada) => {
    if(entrada.includes('@')){
        this.setState({ email : entrada })
    }
    this.setState({errorEmail : 'Email inválido'});
}
isNomeValido = (entrada) => {
    if(entrada.length > 0){
        this.setState({ nome : entrada })
    }
    this.setState({errorNome : 'Nome deve ter pelo menos um caracter'});
}

isCPFValido = (entrada) => {
    let Soma;
    let Resto;
    Soma = 0;
  if (this.state.cpf == "00000000000") return false;
     
  for (i=1; i<=9; i++) Soma = Soma + parseInt(entrada.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(entrada.substring(9, 10)) ) return false;
   
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(entrada.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
   
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(entrada.substring(10, 11) ) ) return false;

    return true;
}

//Fazer validação para senha e confirmação de senha
isSenhaValido = (entrada) => {
    if(entrada.length > 6){
        this.setState({ senha : entrada })
    }
    this.setState({errorSenha : 'Senha deve ter pelo menos 6 caracteres'});
}




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
                    onChangeText={text => this.isNomeValido(texto)}/>
                <InputEmail 
                    autoCorrect={false} 
                    keyboardType='email-address'
                    returnKeyType="next"
                    onChangeText={text => this.isEmailValido(text)}
                    value={this.state.email} 
                    placeholder='E-mail' />
                <InputTexto
                    label= "CPF"
                    max={11}
                    value={this.state.cpf}
                    onChangeText={value => this.setState({cpf : value})}/>
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
                    onChangeText={text => this.isSenhaValido(text)}
                    value={this.state.senha}
                />
                <BotaoGrande
                    texto="Confirmar"
                    onPress={() => this.validate()}
                    endereco='Login' 
                    navigation={this.props.navigation} 
                />

                <Text> 
                        {this.state.errorMessage}
                </Text>
            </View>
    </KeyboardAvoidingView>      
        )
    }
}
