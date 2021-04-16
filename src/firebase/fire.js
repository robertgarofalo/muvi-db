import firebase from 'firebase/app';
import "firebase/auth";
import { firebaseConfig } from '../config';

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
  