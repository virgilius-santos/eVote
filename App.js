import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './src/screens/Home'

// we will use these two screens later in our AppNavigator
import AddItem from './src/screens/AddItem' 
import ListItem from './src/screens/ListItem'

const AppNavigator = createStackNavigator(  
  {
    Home,
    AddItem,
    ListItem
  },
  {
    initialRouteName: 'Home'
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return <AppContainer />
  }
}