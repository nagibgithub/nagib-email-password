// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXRN0NYMuwy1dq6eb6W7eFQXFCYu57kOo",
    authDomain: "nagib-email-pass.firebaseapp.com",
    projectId: "nagib-email-pass",
    storageBucket: "nagib-email-pass.appspot.com",
    messagingSenderId: "722287924857",
    appId: "1:722287924857:web:620250f3816119b997a6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app