import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './src/store'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Inicio from './src/screens/Inicio'

import Sala from './src/screens/Sala'
import Questao from './src/screens/Questao'
import Convidados from './src/screens/Convidados'


const AppNavigator = createStackNavigator(
  {
    Inicio,
    Sala,
    Questao,
    Convidados
  },
  {
    initialRouteName: 'Inicio'
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