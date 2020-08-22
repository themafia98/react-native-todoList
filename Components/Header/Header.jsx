import React from 'react';
import style from './Header.style';
import Controllers from '../Controllers';
import { Text, View } from 'react-native';
import { string } from 'prop-types';

const Header = ({ title }) => {
  return (
    <View style={style.header}>
      <Text style={style.title}>{title}</Text>
      <Controllers />
    </View>
  ) 
};

Header.propTypes = {
  title: string.isRequired
}

Header.defaultProps = {
  title: "todo-list"
};

export default Header;