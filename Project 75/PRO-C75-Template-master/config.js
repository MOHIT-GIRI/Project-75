import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyB3JERu9Oj6HEjbeMadC9OXTZOroVxnnZw",
  authDomain: "e-ride-9aa5b.firebaseapp.com",
  projectId: "e-ride-9aa5b",
  storageBucket: "e-ride-9aa5b.appspot.com",
  messagingSenderId: "969955317479",
  appId: "1:969955317479:web:4f3104f9d756c5e354f442"
};

const app = initializeApp(firebaseConfig);

export default firebase.firestore();
