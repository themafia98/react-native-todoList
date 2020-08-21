import { StatusBar } from 'expo-status-bar';
import styles from './App.style';
import React from 'react';
import { View } from 'react-native';
import Header from './Components/Header';
import Container from './Components/Container';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Container />
    </View>
  );
}

export default App;

