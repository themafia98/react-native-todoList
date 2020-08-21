import { StatusBar } from 'expo-status-bar';
import styles from './App.style';
import React from 'react';
import { Text, View } from 'react-native';
import Header from './Components/Header';
import Controllers from './Components/Controllers/Controllers';
import Container from './Components/Container';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Controllers />
      <Container />
    </View>
  );
}

export default App;

