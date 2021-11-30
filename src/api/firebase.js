import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBndfLqbFDTrzMVYr2c0q53XmHSFLYd5XA",
  authDomain: "gb-chat5.firebaseapp.com",
  projectId: "gb-chat5",
  storageBucket: "gb-chat5.appspot.com",
  messagingSenderId: "158969212750",
  appId: "1:158969212750:web:12d29b0d3315e37d38b81f",
  measurementId: "G-CJGFZKNFXN",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.database();
