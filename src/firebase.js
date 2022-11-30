import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXmxKzOTndx6qgMy26CdiangU0PPrkGc8",
    authDomain: "product-feedback-app-64821.firebaseapp.com",
    projectId: "product-feedback-app-64821",
    storageBucket: "product-feedback-app-64821.appspot.com",
    messagingSenderId: "600612784630",
    appId: "1:600612784630:web:3c045cfa2691c889351fd7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const feedbacksCollectionRef = collection(db, "feedbacks");
// const commentsCollectionRef = collection(db, "comments");


export { auth, provider, db };