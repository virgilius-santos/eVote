import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Barra extends Component {
  constructor(props) {
    super(props);
  }
	render() {
    const {onPress, index} = this.props;
		return (
			<View style={[styles.barNavigation, {position: 'absolute'},
                {flexDirection:'row'}, {flex: 0.1}, {elevation: 2},
                {justifyContent:'space-evenly'}]}>
                <MyButton style={[{flex:.5}]} active={index} onPress={onPress} text={'Votações'} name={'md-checkbox-outline'}></MyButton>
                <MyButton style={[{flex:.5}]} active={!index} onPress={onPress} text={'Histórico'} name={'md-time'}></MyButton>
            </View>
		);
	}
}

Barra.propTypes = {
  onPress: PropTypes.func.isRequired
};

Barra.defaultProps = {
};

const styles = StyleSheet.create({
    barNavigation:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15
    }
});

MyButton = ({active, onPress, text, name}) => {
    return (<TouchableOpacity
      disabled={!active}
      onPress={onPress}
     >
     {
      active
      ? <View style={[styles.barNavigation]}>
          <Icon style={styles.icon} 
              name={name} size={35} 
              color="#8400C5"/>
          <Text fontSize={20} style={[{color:"#8400C5"}]}>{text}</Text>
        </View>
  
      : <View style={[styles.barNavigation]}>
          <Icon style={styles.icon} 
              name={name} size={35} 
              color="#00E576"/>
          <Text fontSize={20} style={[{color:"#00E576"}]}>{text}</Text>
        </View>
      }
    </TouchableOpacity>)
  }

export default Barra;