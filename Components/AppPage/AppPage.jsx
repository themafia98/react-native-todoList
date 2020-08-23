import React, { useContext, useState, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import style from './AppPage.style';
import { SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import Header from '../Header';
import Container from '../Container';
import background from '../../assets/bg.jpg';
import withFirebase from '../../Models/Helpers/FirebaseContext/withFirebase';
import FirebaseContext from '../../Models/Helpers/FirebaseContext/Firebase.context';
import ModalWrapper from '../ModalWrapper';
import LoginForm from '../LoginForm';

const AppPage = () => {

  const [isActive, setActive] = useState(null);

  const api = useContext(FirebaseContext);

  useEffect(() => {
    api.auth.onAuthStateChanged(user => {
      if (user && !isActive) setActive(true);
      else if (!user && (isActive || isActive === null)) setActive(false);
    });
  }, []);


  const appContent = useMemo(() => isActive ? (
    <>
      <Header />
      <Container />
    </>
  ) : (
      <>
        <Header mode="loginPage" />
        <ModalWrapper>
          <LoginForm />
        </ModalWrapper>
      </>
    ), [isActive]);


  return (
    <ImageBackground
      resizeMode="repeat"
      source={background}
      style={style.background}
    >
      <SafeAreaView style={[style.container, isActive === null ? style.center : null]}>
        <StatusBar style="auto" />
        {isActive === null
          ? (
            <ActivityIndicator size="large" color="#0000ff" />
          )
          : appContent
        }
      </SafeAreaView>
    </ImageBackground>
  )
};

export default withFirebase(AppPage);