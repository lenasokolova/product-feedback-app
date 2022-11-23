import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCjVIkpex_q4jLyKqsKFkWd7gLVRzG24oI",
    authDomain: "product-feedback-app-20ece.firebaseapp.com",
    databaseURL: "https://product-feedback-app-20ece-default-rtdb.firebaseio.com",
    projectId: "product-feedback-app-20ece",
    storageBucket: "product-feedback-app-20ece.appspot.com",
    messagingSenderId: "120698199881",
    appId: "1:120698199881:web:4f603511fb6ea64db60498"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default ref(getDatabase())

export { auth, provider, db };