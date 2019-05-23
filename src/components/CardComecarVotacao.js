import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import {Text,View,Image,StyleSheet} from 'react-native';

const CardInfo =({titulo,data,hora,}) =>(
<View style={styles.container}>
  <Text style={styles.titulo} >{titulo}</Text>
  <View style={styles.view}>  
    <Image style={styles.imagem}
      source ={require("../../assets/_ionicons_svg_md-calendar.png")}
    />
    <Text style={styles.data}>{data}</Text>
  </View>
  <View style={styles.view}>
    <Image style={styles.imagem}
      source ={require("../../assets/_ionicons_svg_md-time.png")}
    />
    <Text style={styles.hora}>{hora}</Text>
  </View>
</View>

);
const styles = StyleSheet.create({
  titulo: {
    paddingBottom: 10,
    color: "#8400C5",
    fontSize: 16
  },
  data: {
    fontSize: 16,
    paddingLeft: 10
  },
  hora: {
    fontSize: 16,
    paddingLeft: 10
  },
  imagem:{
    width: 20,
    height: 20,
  },
  view:{ 
    flexDirection: "row",
    height: 40,
    
  },
  container:{
    padding: 15,
    minHeight: 140,
    flexDirection: "column",
    width: 160,
    justifyContent: "flex-start",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  }

});
export default CardInfo;