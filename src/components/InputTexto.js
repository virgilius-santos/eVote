import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native'
import { TextField } from 'react-native-material-textfield';

const InputTexto = ({ disabled, label, max, value, onChangeText }) => {
  return(
    <View>
      <TextField
        characterRestriction={max}
        disabled={disabled}
        label={label}
        value={value}
        onChangeText={value => onChangeText(value)}
        tintColor="#8400C5"
        textColor="#000000"
        baseColor="#9D9C9D"
      />
    </View>

  );
};

const styles = StyleSheet.create({
});

export default InputTexto;

InputTexto.propTypes = {
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

InputTexto.defaultPropTypes = {
  disabled: false,
  isRequired: false,
  max: undefined
}
