import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBIG7XfbUYiM1DhRmzIQ7HmOuMbQ3CUxDY",
    authDomain: "muvidb-85fee.firebaseapp.com",
    projectId: "muvidb-85fee",
    storageBucket: "muvidb-85fee.appspot.com",
    messagingSenderId: "379587514262",
    appId: "1:379587514262:web:6f3ee73975c1657fcb17b7"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;