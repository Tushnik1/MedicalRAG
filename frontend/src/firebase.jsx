import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbJD8mG0CLiVmq_-9sZ_l6VhJNw6sId9Y",
  authDomain: "chikitsakh-mitra.firebaseapp.com",
  projectId: "chikitsakh-mitra",
  storageBucket: "chikitsakh-mitra.firebasestorage.app",
  messagingSenderId: "192526280238",
  appId: "1:192526280238:web:b1b6db8826b8ab6bc2a1bf"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);