import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {Text,View,StyleSheet} from 'react-native';

const CardInfo =({titulo,data,hora,icone}) =>(
  <View>
<Text style={styles.titulo} >{titulo}

</Text>

<Text style={styles.data}>{data}</Text>
<Text style={styles.hora}>{hora}</Text>
<Icon style={styles.icon} 
        name="md-arrow-forward" size={50} 
        color={ disabled ? 'gray' : "#8400C5"}
      />


  </View>

);
const styles = StyleSheet.create({
  titulo: {
    color: "#8400C5",
    fontSize: 16
  },
  data: {
    fontSize: 16
  },
  hora: {
    fontSize: 16
  }
});
export default CardInfo;