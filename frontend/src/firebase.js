import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDEi1rZTz6cN7t7G3oBouFsK03e-AxR3ow",
  authDomain: "ceocol.firebaseapp.com",
  projectId: "ceocol",
  storageBucket: "ceocol.appspot.com",
  messagingSenderId: "775903525289",
  appId: "1:775903525289:web:d0a5c0ca2cd6e3d83eacb8",
  measurementId: "G-NYSWQ9Y6C6"
})

export const auth = firebase.auth();

export default app;