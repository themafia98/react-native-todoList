import * as firebase from 'firebase';

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

/**
 * constructor
 * @param {Object} firebaseConfig config firebase
 */
class Firebase {

  constructor(firebaseConfig) {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.instance = firebase;
  }

  /** @return {Object} Object type session */
  saveSession(rules) {
    // not supported in IOS(react-native)
    return this.auth.setPersistence(firebase.auth.Auth.Persistence[rules]);
  }

  /**
   * Auth
   * @param {string} email
   * @param {string} password
   */
  login(email, password) {
    try {
      return this.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  /**
   * Registration with email and password
   * @param {string} email
   * @param {string} password
   */
  registration(email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Destroy session
   * @return {Object} Object  with empty session data
   */
  signOut() {
    return this.auth.signOut();
  }

  /**
   * User data
   * @return {Object} Object with user data
   */
  getCurrentUser() {
    return this.auth.currentUser;
  }
}

export default Firebase;