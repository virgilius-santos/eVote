import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    KeyboardAvoidingView, 
    AsyncStorage,
    ActivityIndicator } from 'react-native';
import InputTexto from '../components/InputTexto';
import styles from '../styles/estilos';
import DateInput from '../components/DateInput';
import InputEmail from '../components/InputEmail';
import InputSenha from '../components/InputSenha';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoGrande from '../components/BotaoGrande';
import { auth, db } from '../config';


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
          errorNome: '',
          loading: false
        }      
    }

    validate = () => {
        let error = '';
    
        if(this.isNomeValido()==false){
            error = 'nome'
        }else if(this.isEmailValido()==false){
            error = 'email'
        }else if(this.isCPFValido()==false){
            error = 'cpf'
        }else if(this.isSenhaValido()==false){
            error = 'senha'
        }

        switch(error) {
            case 'nome':
              return this.setState({errorMessage: this.state.errorNome})
            case 'email': 
              return this.setState({errorMessage: this.state.errorEmail})
            case 'cpf':
              return this.setState({errorMessage: this.state.errorCPF})
            case 'senha': 
              return this.setState({errorMessage: this.state.errorSenha})
            default:
              this.handleSignUp();
          }

          this.setState({
              errorCPF : '',
              errorEmail : '',
              errorNome : '',
              errorSenha : ''
          })
      }

   
    handleSignUp = async () => {
        const { email, senha, nome, cpf } = this.state;
        this.setState({loading: true});
        const retornoCriacao = await auth.createUserWithEmailAndPassword(email,senha)
            .catch(error => this.setState({ errorMessage: error.message, loading: false }));
        
        const uid = retornoCriacao.user.uid;
        await Promise.all(
            db.ref('usuarios/').push({email, uid, nome, cpf}),
            AsyncStorage.setItem('@UID', uid))
        this.props.navigation.navigate('Inicio')
    }   

    static navigationOptions = {
        title: 'Registrar',
    };


    render(){
        const { loading } = this.state;
        return(
        loading?
        <ActivityIndicator 
            style={stylesLoading.iconStatusLoading}
            animating={loading}
            size="large"
            color="#00DC7B"
        /> :
        <KeyboardAvoidingView behavior={"padding"} style={styles.container} enabled number="2" >   
            <View style={{flex: 1} [styles.flowButtonsContainer, { marginTop: 5 }]}> 
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

                <Text> 
                        {this.state.errorMessage}
                </Text>
            </View>
    </KeyboardAvoidingView>      
        )
    }

    // utilizada classe '../shared/validationUtil.js'
    isEmailValido = () => {
        const {email} = this.state;
        if(email.includes('@'))return true
        this.setState({errorEmail : 'Email inválido'});
        return false
    }
    isNomeValido = () => {
        const {nome} = this.state;
        if(nome.length > 0) return true
        this.setState({errorNome : 'Nome deve ter pelo menos um caracter'});
        return false
    }

    isCPFValido = () => {
        let Soma;
        let Resto;
        let validated = true;
        Soma = 0;
        if (this.state.cpf == "00000000000") validated = false;
        
        for (i=1; i<=9; i++) Soma = Soma + parseInt(this.state.cpf.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(this.state.cpf.substring(9, 10)) ) validated = false;
    
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(this.state.cpf.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(this.state.cpf.substring(10, 11) ) ) validated = false;

        if(validated==false)this.setState({errorCPF : 'CPF inválido'});
        
        return validated;
    }

    //Fazer validação para senha e confirmação de senha
    isSenhaValido = () => {
        const {senha} = this.state;
        if(senha.length >= 6)return true;
        this.setState({errorSenha : 'Senha deve ter pelo menos 6 caracteres'});
        return false
    }
}

const stylesLoading = StyleSheet.create({
    iconStatusLoaded: {
        justifyContent: 'flex-end',
        paddingLeft: 5,
        marginTop: 45
    },
    iconStatusLoading: {
        justifyContent: 'center',
        paddingLeft: 5,
        marginTop: 22
    }
  })

