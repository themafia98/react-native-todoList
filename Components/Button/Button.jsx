import React from 'react';
import { func, object, string } from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import style from './Button.style';


const Button = ({ children, customStyle, onPress }) => (
    <TouchableOpacity 
        onPress={onPress} 
        style={[style.button, customStyle, style?.[children]]} 
    >
        <Text style={style.defaultButtonLabel}>{children}</Text>
    </TouchableOpacity>
)

Button.defaultProps = {
    onPress: null,
    customStyle: {},
    children: "submit"
};

Button.propsTypes = {
    onPress: func.isRequired,
    customStyle: object.isRequired,
    children: string
}

export default Button;