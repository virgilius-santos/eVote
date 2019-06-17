import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import 'moment/src/locale/pt-br';
// import 'node_modules/moment/locale/pt-br';



export default class CardSalaVotacao extends Component {
  constructor(props) {
    super(props)
  }

  getColor = () => {
    const { status } = this.props;
    if (status === 'agendada') {
      return ['#8400C5', '#67009A'];
    }
    else if (status === 'andamento') {
      return ['#00C551', '#03923E'];
    }
    else if (status === 'encerrada') {
      return ['#747474', '#4C4C4C'];
    }
  };

  calculaDescricaoSala = (data, hora) => {

    moment.updateLocale('pt-br');

    let salaMoment = moment(`${data} ${hora}`, 'DD/MM/YYYY HH:mm')
    return salaMoment.fromNow();
    // return "daqui a pouco";


  }

  render() {
    const { status, mensagem, titulo, onPress } = this.props;
    const cores = this.getColor();
    return (
      <TouchableOpacity
        disabled={status == 'agendada' ? true : false}
        activeOpacity={0.5}
        onPress={onPress}
      >
        <View style={styles.container}>
          <LinearGradient
            colors={cores}
            style={styles.content}>
            <View>
              <Text style={styles.titulo} numberOfLines={1} ellipsizeMode='tail'>
                {titulo}
              </Text>
              <Text style={styles.subtitulo} numberOfLines={1} ellipsizeMode='tail'>
                {this.calculaDescricaoSala('23/05/2019', '19:00')}
              </Text>
            </View>
            <Icon style={styles.icon}
              name="ios-arrow-forward" size={18}
              color="#ffffff"
            />
          </LinearGradient>
        </View>
      </TouchableOpacity>
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
    width: "98%"
  },
  content: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    minHeight: 85,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titulo: {
    textAlign: 'left',
    fontSize: 20,
    marginRight: 5,
    fontWeight: 'bold',
    color: "white",
  },
  subtitulo: {
    textAlign: 'left',
    fontSize: 17,
    fontWeight: 'normal',
    color: "white",
    marginRight: 5
  },
  icon: {
    alignSelf: 'center'
  }
});

CardSalaVotacao.propTypes = {
  mensagem: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['andamento', 'agendada', 'encerrada']).isRequired,
  titulo: PropTypes.string
}

CardSalaVotacao.defaultPropTypes = {
  mensagem: '',
  titulo: ''
}