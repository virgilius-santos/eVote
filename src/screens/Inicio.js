import React, { Component } from 'react';  
import { View, ScrollView, Dimensions, Text } from 'react-native';
import { db } from '../config';
let salasRef = db.ref('salas/');
import BotaoNovaSala from '../components/BotaoNovaSala';
import styles from '../styles/estilos';
import SemSalas from '../containers/SemSalas';
import CardSalaVotacao from '../components/CardSalaVotacao';
import Barra from '../components/Barra';


export default class Inicio extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      salas: []
    }
  }
  static navigationOptions = {
    title: 'Votações disponíveis',
  };

  componentWillMount() {
    salasRef.orderByChild("uid").on('value', snapshot => {
      let salas = snapshot.val();

      if (salas != null) {
        salas = Object.values(salas);
          this.setState(() => ({
              salas
            }))
      }
    });
  }

  getStatus = (dataFinal, dataInicial, horaFinal, horaInicial) => {
    // fazer cálculo para retornar se está em andamento, encerrada ou se vai iniciar;
    return 'andamento';
  }

  handleVisualizar = (titulo) => {
    if (titulo)
      this.props.navigation.navigate('Andamento', { 'titulo': titulo });
    else
      this.props.navigation.navigate('Andamento', { 'titulo': 'Não disponível' });
  }

  render() {
    const { salas } = this.state;
    const { height } = Dimensions.get('screen');
    return (
      <View style={[styles.container, { height: height }]}>
        <ScrollView style={{ height: height*0.70}}>
            <View>
              { 
                salas.length > 0 ?
                  salas.map((item, index) =>
                    <CardSalaVotacao
                      key={index}
                      onPress = {() => this.handleVisualizar(item.titulo)}
                      status={this.getStatus(item.dataFinal,
                        item.dataInicial, item.horaFinal,
                        item.horaInicial)}
                      mensagem={item.descricao}
                      titulo={item.titulo}
                    />
                  )
              :
                <SemSalas 
                  texto="No momento você não possui salas de votação disponíveis!"
                />
              }
            </View>
        </ScrollView>
        <BotaoNovaSala
          color = '#10C500'
          endereco='Sala'
          navigation={this.props.navigation} 
        />
        <Barra 
          index={false}
          onPress={() => this.props.navigation.navigate('Historico')}
        />
      </View>
    );
  }
}
