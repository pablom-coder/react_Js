import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCRhF7eutHUFvRY3x1uetWMZBUSc_OAPhc",
  authDomain: "farmareactjs.firebaseapp.com",
  projectId: "farmareactjs",
  storageBucket: "farmareactjs.appspot.com",
  messagingSenderId: "1047998347729",
  appId: "1:1047998347729:web:3eceb57be51847f6d548f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
