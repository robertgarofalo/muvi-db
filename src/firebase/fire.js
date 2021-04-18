import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from '../config';

  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  // Firestore
  const db = firebase.firestore();


  export default fire; 
  