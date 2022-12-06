import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCXmxKzOTndx6qgMy26CdiangU0PPrkGc8",
    authDomain: "product-feedback-app-64821.firebaseapp.com",
    projectId: "product-feedback-app-64821",
    storageBucket: "product-feedback-app-64821.appspot.com",
    messagingSenderId: "600612784630",
    appId: "1:600612784630:web:3c045cfa2691c889351fd7"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);