import firebase from "firebase/app";
import auth from "firebase/auth";
import firestore from "firebase/firestore";
import firebaseConfig from "./config";

/**
 * constructor
 * @param {Object} firebaseConfig config firebase
 */
class Firebase {

  constructor(firebaseConfig) {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.db.enablePersistence()
      .then(res => console.warn(res))
      .catch(er => console.error(er));
  }

  /** @return {Object} Object type session */
  saveSession(rules) {
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