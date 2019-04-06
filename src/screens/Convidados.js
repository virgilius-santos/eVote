import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/estilos';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificacaoHeader from '../components/NotificacaoHeader';
import InputTexto from '../components/InputTexto';
import BotaoProximo from '../components/BotaoProximo';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoCheck from '../components/BotaoCheck';

export default class Convidados extends Component {
  //TODO SUBMIT: salvar no firebase os membros vinculados à sala criada

  constructor(props) {
    super(props);
    this.state = {
      convidados: [
        { nome: "Amanda Santos", cpf: '04194123456', email: 'amanda@gmail.com', incluido: false },
        { nome: "Brenda Silva", cpf: '03457824903', email: 'brenda@gmail.com', incluido: false },
        { nome: "Bruno Almeida", cpf: '28405784953', email: 'bruno@gmail.com', incluido: false },
        { nome: "Cássia Lucas", cpf: '34573568543', email: 'cassia@gmail.com', incluido: false },
        { nome: "Cássio Andrade", cpf: '21357568765', email: 'cassio@gmail.com', incluido: false },
        { nome: "Ana Oliveira", cpf: '34723679876', email: 'ana@gmail.com', incluido: false },
        { nome: "João Silva", cpf: '85687456837', email: 'joao@gmail.com', incluido: false }
      ],
      pesquisa: null
    }
  }

  static navigationOptions = {
    //TODO PUXAR O TITULO DA SALA
    title: 'Sala: Titulo',
  };

  handleSearch = (value) => {
    if(value) {
      const encontrados = this.state.convidados.filter(item => {
        const items = 
        `${item.nome.toUpperCase()}
          ${item.cpf.toUpperCase()}
          ${item.email.toUpperCase()}
          ${item.incluido}`;
        
        const text = value.toUpperCase();
          
        return items.indexOf(text) > -1;    
      });    
      this.setState({ pesquisa: encontrados });
    } else {
      this.setState({ pesquisa: null });
    }
  }

  handleSubmit = () => { }

  handleOnPress = (index) => {
    const { pesquisa, convidados } = this.state;
    convidadosAtualizados = convidados;

    if(pesquisa) {

      convidadosAtualizados.map(item => {
        if(item.cpf == pesquisa[index].cpf || item.email == pesquisa[index].email) {
          item.incluido 
            ? item.incluido = false
            : item.incluido = true;
        }
      });
    } else {
      convidadosAtualizados[index].incluido 
        ? convidadosAtualizados[index].incluido = false
        : convidadosAtualizados[index].incluido = true;
    }

    this.setState ({
      convidados: convidadosAtualizados
    });
  }


  render() {
    const { convidados, pesquisa } = this.state;
    return (
      <View style={styles.container}>
        {/* TODO: EXIBIR QUANTIDADE DE VOTANTES JA ADICIONADOS */}
        <View style={styles.innerContainer}>

          <Text style={[styles.title2, { flex: 0.05 }]}>Adicionar votantes</Text>

          <NotificacaoHeader
            style={{ flex: 0.05 }}
            texto="Votantes já adicionados: 0" 
          />

          <View style={{ flex: 0.9}}>

            <View>
              <InputTexto 
                label="Pesquisar por CPF, Nome ou Email"
                onChangeText={value => this.handleSearch(value)}
              />
              <Icon
                style={{ alignSelf: 'flex-end', marginTop: -33}}
                name="md-search"
                size={20}
                color='#9d9c9d' />
            </View>

            <View>
              <FlatList
                style={{ marginTop: 20 }}
                data={pesquisa || convidados}
                numColumns={1}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={() => this.handleOnPress(index)} style={{ marginLeft: 30, marginBottom: 20 }}>
                    <Text>CPF: {item.cpf} </Text>
                    <Text style={{ color: '#9b9b9b', fontSize: 14 }}>{item.nome} </Text>
                    <BotaoCheck pressed={item.incluido} />
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>



          </View>

        </View>
        <View style={styles.flowButtonsContainer}>
          <BotaoAnterior
            endereco='QuestaoSalva'
            navigation={this.props.navigation}
          />

          <BotaoProximo
            endereco=''
            navigation={this.props.navigation}
            onPress={() => this.handleSubmit()}
          />
        </View>
      </View>
    );
  }
}