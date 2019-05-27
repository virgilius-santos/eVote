import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

    const alfabeto = ['a', 'b',	'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
export default BotaoAlternativa = ({ selected, index, text, onPress }) => {
    const cor = selected == index ? { backgroundColor: '#00E576' } : { backgroundColor: '#7500CF' }
    return (

        <TouchableOpacity
            style={[styles.buttonStyle, cor, { flexDirection: 'row', justifyContent: 'space-evenly', alignItems:'center' }]}
            onPress={onPress}>
            <View style={{ position:'absolute',left: 0 }}>
                <Text style={{ color: '#ffffff', fontSize: 20 }}> {alfabeto[index]}) </Text>
            </View>
            <View style={{ padding: 8, maxWidth: '85%',  }}>
                <Text style={{ color: '#ffffff', fontSize: 15 }}> {text}</Text>
            </View>

        </TouchableOpacity>
    );
}

BotaoAlternativa.propTypes = {
    selected: PropTypes.bool,
    index: PropTypes.number,
    text: PropTypes.string,
    onPress: PropTypes.func.isRequired
};

BotaoAlternativa.defaultProps = {
    selected: false
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        // marginTop: -40,
        flexDirection: 'row'
    },
    buttonStyle: {
        alignSelf: 'center',
        borderRadius: 50,
        justifyContent: 'center',
        margin: 10,
        width: 330,
        flexDirection: 'row'
    }
});