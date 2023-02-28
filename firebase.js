// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEen59D6W8UueY5dOigHlz_-ZPNXL8FRY",
  authDomain: "fir-auth-fe5d3.firebaseapp.com",
  projectId: "fir-auth-fe5d3",
  storageBucket: "fir-auth-fe5d3.appspot.com",
  messagingSenderId: "28748805088",
  appId: "1:28748805088:web:87aea95ff9171054e93185"
};

// Initialize Firebase
let app;
if (!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export {auth};



// video links
// https://youtu.be/ql4J6SpLXZA      (login,homepage)
// https://youtu.be/0-S5a0eXPoc      (mosh course)

// https://youtu.be/4bgNtdFXP70     (firebase 9.17.1 connect with react native authentication)
