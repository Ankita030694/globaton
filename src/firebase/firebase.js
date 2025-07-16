// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEll1RbwLBpY5aJfTi_jZxmIH-SpVRwrs",
  authDomain: "globatonn.firebaseapp.com",
  projectId: "globatonn",
  storageBucket: "globatonn.firebasestorage.app",
  messagingSenderId: "1048764388256",
  appId: "1:1048764388256:web:5810198f24e46a1e9e4ac5",
  measurementId: "G-VFMQRQMWJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };