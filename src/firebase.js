import firebase from 'firebase';



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

export {db, auth};