import React, { Component } from "react"
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import moment from "moment";

export default class TimeInput extends Component{
    constructor(props){
        super(props)
        this.state = {time: "00:00:00"}
    }
    

    render(){
        const { titulo } = this.props;
        return( 
            <View>
                <Text style={styles.texto}>
                    {titulo}
                </Text>
                <DatePicker
                    date={this.state.time}
                    mode="time"
                    placeholder="selecionar hora"
                    format="HH:MM:SS"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    iconSource={require("../../assets/_ionicons_svg_md-time.png")}
                    customStyles={{
                    dateIcon: {
                        right:0,
                        position: 'relative',
                        top: 4
                    },
                    dateInput: {
                        alignSelf:"flex-start",
                        borderTopWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        marginLeft:0,
                        marginRight: 0,
                        width: 130,

                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({time: date})}}
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
