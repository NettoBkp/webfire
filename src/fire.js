import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: `KEYFIRE`, 
    authDomain: "astiweb-a5d31.firebaseapp.com",
    databaseURL: "https://astiweb-a5d31.firebaseio.com",
    projectId: "astiweb-a5d31",
    storageBucket: "astiweb-a5d31.appspot.com",
    messagingSenderId: "161192035598",
    appId: "1:161192035598:web:fe8bbf874896ebafa7c35f"
  };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);

export default fire;

  