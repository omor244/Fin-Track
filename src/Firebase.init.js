// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDT9B-RF-OGVrIiINJwZd_VZ6vd6eK-YkE",
    authDomain: "fintrack-c5545.firebaseapp.com",
    projectId: "fintrack-c5545",
    storageBucket: "fintrack-c5545.firebasestorage.app",
    messagingSenderId: "518762591966",
    appId: "1:518762591966:web:182fe565aae267c6c8344f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
