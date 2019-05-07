import React, { Component } from 'react';  
import { View, Text, TouchableOpacity, Divider } from 'react-native';
import styles from '../styles/estilos';
import Inicio from '../screens/Inicio';
import Icon from 'react-native-vector-icons/Ionicons';
import Historico from '../screens/Historico';

export default class InicioContainer extends Component {  
  constructor(props) {
    super(props) 
    this.state = {
      index:false
    }
  }

  change = () => {
    this.setState(previousState => ({ index: !previousState.index }));
    console.log(this.state.index);
  }
 
  renderBody(){
    if(!this.state.index)
      return (<Inicio></Inicio>)

    return (<Historico></Historico>)
  }

  render() {
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
        {this.renderBody()}
        <Barra index={this.state.index} change={this.change}></Barra>
      </View>
    );
  }
}
Barra = ({index, change}) => {
  return(
    <View style={[styles.barNavigation, 
            {flexDirection:'row'}, {flex: 0.1}, {elevation: 2},
            {justifyContent:'space-evenly'}]}>
      <MyButton style={[{flex:.5}]} active={index} changeIndex={() => change()} text={'Votações'} name={'md-checkbox-outline'}></MyButton>
      <MyButton style={[{flex:.5}]} active={!index} changeIndex={() => change()} text={'Histórico'} name={'md-time'}></MyButton>
    </View>
  )
}

MyButton = ({active, changeIndex, text, name}) => {
  return (<TouchableOpacity
    disabled={!active}
    onPress={() => changeIndex()}
   >
   {
    active
    ? <View style={[styles.barNavigation]}>
        <Icon style={styles.icon} 
            name={name} size={35} 
            color="#8400C5"/>
        <Text fontSize={20} style={[{color:"#8400C5"}]}>{text}</Text>
      </View>

    : <View style={[styles.barNavigation]}>
        <Icon style={styles.icon} 
            name={name} size={35} 
            color="#00E576"/>
        <Text fontSize={20} style={[{color:"#00E576"}]}>{text}</Text>
      </View>
    }
  </TouchableOpacity>)
}