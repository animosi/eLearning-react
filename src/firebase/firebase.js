import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from '../config';

const app = firebase.initializeApp(firebaseConfig);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { app, firebase, googleAuthProvider };
