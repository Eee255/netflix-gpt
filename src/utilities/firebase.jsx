// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2SQncCnnQ1_QM2J4L5oxIhcyPUpgk10k",
  authDomain: "netflix-gpt-97198.firebaseapp.com",
  projectId: "netflix-gpt-97198",
  storageBucket: "netflix-gpt-97198.firebasestorage.app",
  messagingSenderId: "339046774277",
  appId: "1:339046774277:web:dfb2e750c8bb274ac34e6c",
  measurementId: "G-94E81FB9JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();


//when we use create react app then in the command when i am hoisting is build as directory