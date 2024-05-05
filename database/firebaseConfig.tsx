// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmny05oqw-QJ8NcTnTX9rOlcAiiNQSxPE",
  authDomain: "gen-ai-15f68.firebaseapp.com",
  projectId: "gen-ai-15f68",
  storageBucket: "gen-ai-15f68.appspot.com",
  messagingSenderId: "148109292423",
  appId: "1:148109292423:web:b69fc38d11da6b6e909922",
  measurementId: "G-2NN1R5S49B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);