import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSg-fbnd2UMmUbWtkcQv-yQZeUIpoRNsc",
  authDomain: "veggify-app.firebaseapp.com",
  projectId: "veggify-app",
  storageBucket: "veggify-app.appspot.com",
  messagingSenderId: "269476066274",
  appId: "1:269476066274:web:91b2fdff5fd25bf121ffbb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);