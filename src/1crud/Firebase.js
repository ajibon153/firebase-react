import firebase from "@firebase/app";
// require("firebase/auth");

var firebaseConfig = {
  apiKey: "AIzaSyDRmO8DNHLaU8fGDQ-5XoC-SWJ1N7wziHA",
  authDomain: "fir-crud-react-805f6.firebaseapp.com",
  databaseURL: "https://fir-crud-react-805f6-default-rtdb.firebaseio.com",
  projectId: "fir-crud-react-805f6",
  storageBucket: "fir-crud-react-805f6.appspot.com",
  messagingSenderId: "251469737323",
  appId: "1:251469737323:web:da46092cc0ec95ed5b702e",
};
// Initialize Firebase
// var firebaseDb =
firebase.initializeApp(firebaseConfig);

export default firebase;
