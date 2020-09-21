import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from '../config/config';

const app = firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { app, firebase, googleAuthProvider, facebookAuthProvider };
