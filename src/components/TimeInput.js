import React, { Component } from "react"
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class TimeInput extends Component{
    constructor(props){
        super(props)
        this.state = {time:"HH:MM:SS"};
    }
    

    render(){
        const { titulo } = this.props;
        return( 
            <View>
                <Text>
                    {titulo}
                </Text>
                <DatePicker     
                    style={{width: 200}}
                    time={this.state.time}
                    mode="time"
                    placeholder="selecionar hora"
                    format="HH:MM:SS"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    iconSource={require("../../assets/_ionicons_svg_md-time.png")}
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left:0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 30
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
            </View>
        )
    }
}