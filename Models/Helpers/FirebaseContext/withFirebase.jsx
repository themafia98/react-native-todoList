import React from 'react';
import Firebase from '../../Firebase';
import firebaseConfig from '../../Firebase/config';
import FirebaseContext from './Firebase.context';

const api = { getCurrentUser() { return null; } };

const withFirebase = Component => props => {

    return (
        <FirebaseContext.Provider value={api}>
            <Component {...props} />
        </FirebaseContext.Provider>
    )
};

export default withFirebase;