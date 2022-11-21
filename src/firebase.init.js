// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEV0D25W0YxLlNM00GFs4R02VA-cRF93s",
  authDomain: "genius-car-services-9db4b.firebaseapp.com",
  projectId: "genius-car-services-9db4b",
  storageBucket: "genius-car-services-9db4b.appspot.com",
  messagingSenderId: "223975120225",
  appId: "1:223975120225:web:98dce3af3547df6203b920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;