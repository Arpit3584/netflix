// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZGsP7fvdK2IFsJEXJs7GvVWGTqmiMn1U",
  authDomain: "netflixgpt-ccdc8.firebaseapp.com",
  projectId: "netflixgpt-ccdc8",
  storageBucket: "netflixgpt-ccdc8.appspot.com",
  messagingSenderId: "35661933125",
  appId: "1:35661933125:web:f82b47fd4b8add5f6a112c",
  measurementId: "G-7Y47V6KX56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();