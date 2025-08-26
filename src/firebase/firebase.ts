import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAH9BXrI4FphoDVneQYpkL742F6fGf81kA",
  authDomain: "task-manager-website-63cfa.firebaseapp.com",
  projectId: "task-manager-website-63cfa",
  storageBucket: "task-manager-website-63cfa.firebasestorage.app",
  messagingSenderId: "1040449065038",
  appId: "1:1040449065038:web:988c801287961aa92c331f",
  measurementId: "G-ZKSDY2CMML"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);