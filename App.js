import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import AppPage from './Components/AppPage';

const App = () => {

  return (
    <Provider store={store}>
      <AppPage />
    </Provider>
  );
}

export default App;

