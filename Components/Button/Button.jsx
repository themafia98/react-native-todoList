import React from 'react';
import { func, object, string, number, oneOfType } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import style from './Button.style';


const Button = ({ children, customStyle, onPress, disabled }) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={!disabled ? onPress : null}
    style={[style.button, customStyle, style?.[children], disabled ? style.disabled : null]}
  >
    <Text style={style.defaultButtonLabel}>{children}</Text>
  </TouchableOpacity>
)

Button.defaultProps = {
  onPress: null,
  customStyle: {},
  children: "submit"
};

Button.propTypes = {
  onPress: func,
  customStyle: oneOfType([number, object]),
  children: string
}

export default Button;