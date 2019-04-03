import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import moment from "moment";
import { View, Text, StyleSheet } from "react-native";

export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    
    const dateNow = moment(new Date());
    this.state = {date: dateNow}
  }

  handleDateChange = (data) => {
        this.setState({date: data});
        this.props.onDateChange(data, this.props.id);
  }
 
  render(){
      const { titulo } = this.props;
      const { date } = this.state;
      
    return (

    <View>
        
      <Text style={styles.texto} >
        { titulo }
      </Text>

      <DatePicker
        date={date}
        mode="date"        
        iconSource={require("../../assets/_ionicons_svg_md-calendar.png")}
        format="DD/MM/YYYY"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        customStyles={{
          dateIcon: {
            position: 'relative',
            right: 0,
            top: 4,
            marginRight: 0
          },

          dateInput: {
            alignSelf:"flex-start",
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            marginLeft:0,
            marginRight: 10,
            width: 130,
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.handleDateChange(date)}}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    texto: {
      fontSize: 14,
      fontWeight: 'normal',
      color: "#8400C5",
    },
  });
