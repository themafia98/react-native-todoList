import React from 'react';
import FirebaseContext from './Firebase.context';
import api from '../../Firebase/instance';

const withFirebase = Component => props => {
  return (
    <FirebaseContext.Provider value={api}>
      <Component {...props} />
    </FirebaseContext.Provider>
  )
};

export default withFirebase;