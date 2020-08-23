import React from 'react';
import Firebase from '../../Firebase';
import firebaseConfig from '../../Firebase/config';
import FirebaseContext from './Firebase.context';

const api = new Firebase(firebaseConfig);
// api.saveSession("SESSION"); not supported in react-native (IOS)

const withFirebase = Component => props => {

  return (
    <FirebaseContext.Provider value={api}>
      <Component {...props} />
    </FirebaseContext.Provider>
  )
};

export default withFirebase;