import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield';

const InputTexto = ({ disabled, error, label, max, value, onChangeText }) => {
  return(
    <View>
      <TextField
        characterRestriction={max}
        disabled={disabled}
        label={label}
        labelFontSize={14}
        value={value}
        onChangeText={value => onChangeText(value)}
        tintColor={error ? "red" : "#8400C5"}
        textColor="#000000"
        baseColor={error ? "red" :"#8400C5"}
      />
    </View>

  );
};

export default InputTexto;

InputTexto.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string.isRequired,
  max: PropTypes.number,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

InputTexto.defaultPropTypes = {
  disabled: false,
  error: false,
  isRequired: false,
  max: undefined
}
