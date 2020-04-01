import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAFq-57HIwyvU4U8tgXqTHHkrR1OKLPpTg",
  authDomain: "simplegroupchat-9d945.firebaseapp.com",
  databaseURL: "https://simplegroupchat-9d945.firebaseio.com",
  projectId: "simplegroupchat-9d945",
  storageBucket: "simplegroupchat-9d945.appspot.com",
  messagingSenderId: "982364371276",
  appId: "1:982364371276:web:b71a795d601e9681c577e9",
  measurementId: "G-J6FZFMGEDW"
};
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;