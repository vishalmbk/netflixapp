// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBq18gOiRufkn53A0DNa_UQidzYnjZqF0",
  authDomain: "netflixappgpt.firebaseapp.com",
  projectId: "netflixappgpt",
  storageBucket: "netflixappgpt.appspot.com",
  messagingSenderId: "575467516971",
  appId: "1:575467516971:web:dd93de437d3ef4f6dea66e",
  measurementId: "G-2XSLDW1JZ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
