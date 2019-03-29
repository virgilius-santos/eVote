import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './src/store'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Inicio from './src/screens/Inicio'

import Sala from './src/screens/Sala'
import Questao from './src/screens/Questao'
import QuestaoContexto from './src/screens/QuestaoContexto'
import QuestaoNovamente from './src/screens/QuestaoNovamente'
import Convidados from './src/screens/Convidados'


const AppNavigator = createStackNavigator(
  {
    Inicio,
    Sala,
    Questao,
    QuestaoContexto,
    QuestaoNovamente,
    Convidados
  },
  {
    initialRouteName: 'Inicio',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerTintColor: '#8400C5',
      headerTitleContainerStyle: {
        justifyContent: 'center',
        textAlign: 'center',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#00C551',
      },
      headerBackTitle: 'Voltar'
    },
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}