import { StatusBar } from 'expo-status-bar';
import style from './App.style';
import React from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import Header from './Components/Header';
import Container from './Components/Container';
import background from './assets/bg.jpg';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ImageBackground 
        resizeMode="repeat" 
        source={background} 
        style={style.background}
      >
        <SafeAreaView style={style.container}>
          <StatusBar style="auto" />
          <Header />
          <Container />
        </SafeAreaView>
      </ImageBackground>
    </Provider>
  );
}

export default App;

