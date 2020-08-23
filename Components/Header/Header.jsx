import React, { useContext } from 'react';
import style from './Header.style';
import Controllers from '../Controllers';
import { Text, Button, SafeAreaView } from 'react-native';
import { string } from 'prop-types';
import FirebaseContext from '../../Models/Helpers/FirebaseContext/Firebase.context';

const Header = ({ title }) => {

  const api = useContext(FirebaseContext);

  const onLogout = () => api.signOut();

  return (
    <>
      <SafeAreaView style={style.logoutButton}>
        <Button title="logout" onPress={onLogout} />
      </SafeAreaView>
      <SafeAreaView style={style.header}>
        <Text style={style.title}>{title}</Text>
        <Controllers />
      </SafeAreaView>
    </>
  )
};

Header.propTypes = {
  title: string.isRequired
}

Header.defaultProps = {
  title: "todo-list"
};

export default Header;