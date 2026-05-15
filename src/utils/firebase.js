// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNE-BeeYkL3_ZLyvLpVrW6PfapVAdigcg",
    authDomain: "movielux-d12c5.firebaseapp.com",
    projectId: "movielux-d12c5",
    storageBucket: "movielux-d12c5.firebasestorage.app",
    messagingSenderId: "59858703934",
    appId: "1:59858703934:web:cfae6e8001f5846acfe36f",
    measurementId: "G-RMQF2BD5PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();