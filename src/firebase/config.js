// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxlUTasognp8qYjUI9sMp3WGOZj-mMnWs",
  authDomain: "dodgeball-argentina.firebaseapp.com",
  projectId: "dodgeball-argentina",
  storageBucket: "dodgeball-argentina.appspot.com",
  messagingSenderId: "650960764714",
  appId: "1:650960764714:web:bc81dea1306fb0d4e2a853",
  measurementId: "G-RL39408GL1",
  storageBucket: ''
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export const db= getFirestore(app)
