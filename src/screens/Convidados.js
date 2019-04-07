import React, { Component } from 'react';
import { Button, View, Text, Alert, StyleSheet, ScrollView, FlatList, TouchableOpacity, Dimensions } from 'react-native';
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
        { nome: "Amanda Santos", cpf: '04194123456', incluido: false },
        { nome: "Brenda Silva", cpf: '03457824903', incluido: false, email: 'brenda@gmail.com' },
        { nome: "Bruno Almeida", cpf: '28405784953', incluido: false, email: 'bruno@gmail.com' },
        { nome: "Cássia Lucas", cpf: '34573568543', incluido: false, email: 'cassia@gmail.com' },
        { nome: "Cássio Andrade", cpf: '21357568765', incluido: false, email: 'amanda@gmail.com' },
        { nome: "Ana Oliveira", cpf: '34723679876', incluido: false, email: 'ana@gmail.com' },
        { nome: "João Silva", cpf: '85687456837', incluido: false, email: 'joao@gmail.com' },
        { nome: "Cássia Lucas", cpf: '789145365789', incluido: false, email: 'cassio@gmail.com' },
        { nome: "Cássio Andrade", cpf: '14578365147', incluido: false, email: 'cassio1@gmail.com' },
        { nome: "Ana Oliveira", cpf: '02145878963', incluido: false, email: 'ana1@gmail.com' },
        { nome: "João Silva", cpf: '14785298741', incluido: false, email: 'joao1@gmail.com' },
        { nome: "Cássia Lucas", cpf: '00011133344', incluido: false, email: 'cassia2@gmail.com' },
        { nome: "Cássio Andrade", cpf: '01478936514', incluido: false, email: 'cassio2@gmail.com'  },
        { nome: "Ana Oliveira", cpf: '78912315947', incluido: false, email: 'ana2@gmail.com' },
        { nome: "João Silva", cpf: '96345874122', incluido: false, email: 'joao2@gmail.com' },
      ],
      pesquisa: null
    }
  }

  static navigationOptions = {
    //TODO PUXAR O TITULO DA SALA
    title: 'Sala: Titulo',
  };

  handleSearch = (value) => {
    let items;
    if(value) {
      const encontrados = this.state.convidados.filter(item => {
        if(item.cpf && item.email) {
          items = 
          `${item.nome.toUpperCase()}
            ${item.cpf.toUpperCase()}
            ${item.email.toUpperCase()}
            ${item.incluido}`;
        } else if(item.cpf) {
          items = 
          `${item.nome.toUpperCase()}
            ${item.cpf.toUpperCase()}
            ${item.incluido}`;
        } else if(item.email) {
          items = 
          `${item.nome.toUpperCase()}
            ${item.email.toUpperCase()}
            ${item.incluido}`;
        }

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
        if(item.cpf == pesquisa[index].cpf 
          || item.email == pesquisa[index].email) {
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

        <View style={[{alignSelf:"auto"}, {marginBottom: 5}]}>
          <Text style={styles.title2}>Adicionar votantes</Text>
          <NotificacaoHeader
            texto="Votantes já adicionados: 0"
          />
        </View>
          
        <View style={{alignSelf:"auto"}}>
          <InputTexto 
            label="Pesquisar por CPF, Nome ou Email"
            onChangeText={value => this.handleSearch(value)}
          />
          <Icon
            style={{ alignSelf: 'flex-end', marginTop: -33}}
            name="md-search"
            size={20}
            color='#9d9c9d' 
          />
        </View>

        <ScrollView style={[{alignSelf: 'auto'}, {marginTop: 5}]}>
          <FlatList
            style={{ marginTop: 20 }}
            data={pesquisa || convidados}
            numColumns={1}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => this.handleOnPress(index)} style={{ marginLeft: 30, marginBottom: 20 }}>
                <Text>{item.nome} </Text>
                <Text style={{ color: '#9b9b9b', fontSize: 14 }}>CPF: {item.cpf} </Text>
                <BotaoCheck pressed={item.incluido} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>

        <View style={[styles.flowButtonsContainer, {alignSelf: "auto"}, {marginTop: 5}]}>
          <BotaoAnterior
            endereco='QuestaoSalva'
            navigation={this.props.navigation}
          />
          <BotaoProximo 
            endereco='Inicio'
            navigation={this.props.navigation}
          />
        </View>

      </View>
    );
  }
}