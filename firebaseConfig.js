// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZRhZxKxMLzFDmD-nQBwADzqc8-rYyyNw",
    authDomain: "socialmediaapp-49fd2.firebaseapp.com",
    projectId: "socialmediaapp-49fd2",
    storageBucket: "socialmediaapp-49fd2.appspot.com",
    messagingSenderId: "774903294925",
    appId: "1:774903294925:android:c5541b3038885f9331f284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
