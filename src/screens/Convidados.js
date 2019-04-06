import React, { Component } from 'react';
import { Button, View, Text, Alert, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import styles from '../styles/estilos';
import Icon from 'react-native-vector-icons/Ionicons';
import NotificacaoHeader from '../components/NotificacaoHeader';
import InputTexto from '../components/InputTexto';
import BotaoProximo from '../components/BotaoProximo';
import BotaoAnterior from '../components/BotaoAnterior';
import BotaoCheck from '../components/BotaoCheck';

export default class Convidados extends Component {

  //TODO ARRUMAR OS FLEX E COLOCAR MAIS CONVIDADOS PARA SIMULAR O SUMICO DO BOTAO

  constructor(props) {
    super(props);
    this.state = {
      convidados: [
        { nome: "Amanda Santos", cpf: '04194123456', incluido: true },
        { nome: "Brenda Silva", cpf: '03457824903', incluido: true },
        { nome: "Bruno Almeida", cpf: '28405784953', incluido: true },
        { nome: "Cássia Lucas", cpf: '34573568543', incluido: false },
        { nome: "Cássio Andrade", cpf: '21357568765', incluido: false },
        { nome: "Ana Oliveira", cpf: '34723679876', incluido: false },
        { nome: "João Silva", cpf: '85687456837', incluido: false }
      ],
      pesquisa: ''
    }
  }

  static navigationOptions = {
    //TODO PUXAR O TITULO DA SALA
    title: 'Sala: Titulo',
  };

  handlePesquisa = (value) => {
    this.setState({
      pesquisa: value
    })
  }

  handleSubmit = () => { }

  handleOnPress = (index) => {

    convidadosAtualizados = this.state.convidados
    convidadosAtualizados[index].incluido ? convidadosAtualizados[index].incluido = false : convidadosAtualizados[index].incluido = true 
    this.setState ({
      convidados: convidadosAtualizados
    })
  }


  render() {
    return (
      <View style={styles.container}>
        {/* TODO: EXIBIR QUANTIDADE DE VOTANTES JA ADICIONADOS */}
        <View style={styles.innerContainer}>

          <Text style={styles.title2}>Adicionar votantes</Text>

          <NotificacaoHeader
            texto="Votantes já adicionados" />

          <View>


            <View>
              <InputTexto 
                label="Pesquisar por CPF, Nome ou Email"
                onChangeText={value => this.handlePesquisa(value)}
              />
              <Icon
                style={{ alignSelf: 'flex-end', marginTop: -33}}
                name="md-search"
                size={20}
                color='#9d9c9d' />
            </View>

            <View >
              <FlatList
                style={{ marginTop: 20 }}
                data={this.state.convidados}
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