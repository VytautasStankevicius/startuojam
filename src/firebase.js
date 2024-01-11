import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDqP-Ek0JzJH7z_G8EwXwfJC4vhCIJciRw",

  authDomain: "travel-crud-29cd5.firebaseapp.com",

  projectId: "travel-crud-29cd5",

  storageBucket: "travel-crud-29cd5.appspot.com",

  messagingSenderId: "868445769050",

  appId: "1:868445769050:web:cd1c34ca6f2ea7a7c8b763"

};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase;

export {
  app
}