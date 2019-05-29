import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const alfabeto = ['a', 'b',	'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
export default BotaoAlternativa = ({ selectedIndex, index, text, onPress, key }) => {
const cor = selectedIndex == index ? { backgroundColor: '#00E576' } : { backgroundColor: '#7500CF' }
    return (
        <TouchableOpacity
            key={key}
            style={[styles.buttonStyle, cor, { minHeight: 50 }]}
            onPress={onPress} 
        >
            <View style={{ flexDirection: 'row', alignItems:'center', padding: 15 }}>
                <View>
                    <Text style={{ color: '#ffffff', fontSize: 20 }}>{alfabeto[index]})</Text>
                </View>
                <View>
                    <Text style={{ color: '#ffffff', fontSize: 15, paddingLeft: 10, paddingTop: 3 }}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

BotaoAlternativa.propTypes = {
    selectedIndex: PropTypes.number,
    index: PropTypes.number,
    text: PropTypes.string,
    onPress: PropTypes.func.isRequired
};

BotaoAlternativa.defaultProps = {
    selectedIndex: 0
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-end',
        flexDirection: 'row'
    },
    buttonStyle: {
        alignSelf: 'center',
        padding: 5,
        borderRadius: 50,
        justifyContent: 'center',
        margin: 10,
        width: 330,
        flexDirection: 'row'
    }
});