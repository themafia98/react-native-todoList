import React from 'react';
import style from './Header.style';
import Controllers from '../Controllers';
import { Text, TextPropTypes, View } from 'react-native';

const Header = ({ title }) => {
    return (
    <View style={style.header}>
        <Text style={style.title}>{title}</Text>
        <Controllers />
    </View>
    )
};

Header.propTypes = {
    title: TextPropTypes
}

Header.defaultProps = {
    title: "todo-list"
};

export default Header;