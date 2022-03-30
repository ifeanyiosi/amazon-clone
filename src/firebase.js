// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore/lite";



const firebaseConfig = {
  apiKey: "AIzaSyDk9e0FsF73mbjaOH4WoYvz37yFBO0uJFM",
  authDomain: "clone-a11bd.firebaseapp.com",
  projectId: "clone-a11bd",
  storageBucket: "clone-a11bd.appspot.com",
  messagingSenderId: "243214388659",
  appId: "1:243214388659:web:44dd27a35a28d9927f8fc6",
  measurementId: "G-V3KJ4PXELV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth();
// const storage = getStorage(app);

export {db, auth};