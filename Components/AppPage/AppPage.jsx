import React, { useContext, useState, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import style from './AppPage.style';
import { SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import Header from '../Header';
import Container from '../Container';
import background from '../../assets/bg.jpg';
import withFirebase from '../../Models/Helpers/FirebaseContext/withFirebase';
import FirebaseContext from '../../Models/Helpers/FirebaseContext/Firebase.context';
import Window from '../Window';
import LoginForm from '../LoginForm';
import { useSelector } from 'react-redux';
import TodoView from '../TodoView';
import Popup from '../Popup';

const AppPage = () => {

  const [isActive, setActive] = useState(null);
  const [isPopupActive, setPopupActive] = useState(false);

  const { popupId, popupData } = useSelector(state => {
    const { openPopupId: popupId, popupData } = state.appReducer;
    return {
      popupId,
      popupData
    }
  });

  const api = useContext(FirebaseContext);

  useEffect(() => {
    api.auth.onAuthStateChanged(user => {
      if (user && !isActive) setActive(true);
      else if (!user && (isActive || isActive === null)) setActive(false);
    });
  }, []);

  const onChangePopupVisibility = () => setPopupActive(visible => !visible);


  const appContent = useMemo(() => isActive ? (
    <SafeAreaView style={style.appContainer}>
      <Header />
      <Container onChangePopupVisibility={onChangePopupVisibility} />
      <Popup
        customVisibilityEvent={onChangePopupVisibility}
        popupId={popupId}
        visibility={isPopupActive}
      >
        <TodoView
          onPress={onChangePopupVisibility}
          {...popupData}
        />
      </Popup>
    </SafeAreaView>
  ) : (
      <>
        <Header mode="loginPage" />
        <Window>
          <LoginForm />
        </Window>
      </>
    ), [isActive, popupId, popupData, isPopupActive]);


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