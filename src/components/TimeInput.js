import React, { Component } from "react"
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class TimeInput extends Component{
    constructor(props){
        super(props)
        this.state = {time: "00:00"}
    }
    handleTime = (date) => {
        const { target } = this.props;

        this.setState({time: date});
        this.props.onTimeChange(date,target);
    }

    render(){
        const { time } = this.state;
        const { titulo } = this.props;
        return( 
            <View>
                <Text style={styles.texto}>
                    {titulo}
                </Text>
                <DatePicker
                    date={time}
                    mode="time"
                    placeholder="selecionar hora"
                    format="HH:MM"
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
                }}
                    onDateChange={(date) => this.handleTime(date)}
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

TimeInput.propTypes = {
    onTimeChange: PropTypes.func.isRequired,
    titulo: PropTypes.string.isRequired,
    target: PropTypes.oneOf(['hInicial', 'hFinal']).isRequired
}
