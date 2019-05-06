import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CardSalaVotacao extends Component {
  constructor(props){
    super(props)
  }
 
  getColor = () => {
    const { status } = this.props;
    if(status === 'agendada'){
      return ['#8400C5','#67009A'];
    }
    else if(status === 'andamento'){
      return ['#00C551','#03923E'];
    }
    else if(status === 'encerrada'){
      return ['#747474','#4C4C4C'];
    }
  };

  render(){
    const { status, mensagem, titulo } = this.props;
    const cores = this.getColor();
    return (
    <View style={styles.container}>
      <LinearGradient
        colors={cores}
        style={styles.content}>
        <View>
          <Text style={styles.titulo}>
            {titulo}
          </Text>
          <Text style={styles.subtitulo}>
            {mensagem}
          </Text>
        </View>
        <Icon style={styles.icon} 
          name="ios-arrow-forward" size={18} 
          color="#ffffff" 
        />
      </LinearGradient>
    </View>
    )
  }
  
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 5,
      alignItems: "center",
      alignSelf: "center",
      flexGrow: 1,
      margin: 4,
      width: 315
    },
    content: {
      width: 315, 
      padding: 15, 
      borderRadius: 10, 
      minHeight: 85, 
      flexDirection: 'row', 
      justifyContent: 'space-between' 
    },
    titulo: {
      textAlign: 'left',
      fontSize: 20,
      fontWeight: 'bold',
      color: "white",
    },
    subtitulo: {
      textAlign: 'left',
      fontSize: 17,
      fontWeight: 'normal',
      color: "white",
    },
    icon: {
      alignSelf: 'center'
    }
});

CardSalaVotacao.propTypes = {
  status: PropTypes.oneOf(['andamento','agendada','encerrada']),
  mensagem: PropTypes.string,
  titulo: PropTypes.string
}

CardSalaVotacao.defaultPropTypes = {
  status:'agendada',
  mensagem: '',
  titulo: ''
}