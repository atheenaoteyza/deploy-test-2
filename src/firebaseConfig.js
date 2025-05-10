// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt2nM_2d_IOHhGP_USIvBWdT8Z4tEKWls",
  authDomain: "deploy-test-2-e4f2c.firebaseapp.com",
  databaseUrl:
    "https://deploy-test-2-e4f2c-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "deploy-test-2-e4f2c",
  storageBucket: "deploy-test-2-e4f2c.firebasestorage.app",
  messagingSenderId: "192337207293",
  appId: "1:192337207293:web:7cc22bb7bda30580d50394",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
