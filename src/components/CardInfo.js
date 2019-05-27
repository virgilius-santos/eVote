import React from 'react';
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
    paddingTop: 15,
    paddingLeft: 8,
    paddingRight: 8,
    minHeight: 140,
    flexDirection: "column",
    width: 180,
    justifyContent: "flex-start",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: "#f2f2f2",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  }

});
export default CardInfo;