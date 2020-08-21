import React from 'react';
import style from './Header.style';
import { Text, TextPropTypes } from 'react-native';

const Header = ({ title }) => {
    return (
    <Text style={style.title}>{title}</Text>
    )
};

Header.propTypes = {
    title: TextPropTypes
}

Header.defaultProps = {
    title: "todo-list"
};

export default Header;