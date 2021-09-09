import firebase from "firebase/app";
import "firebase/auth";
import './index.css';
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBdRRcRixCDg9szvCW5dy5VnlSpDz-4Ih4",
    authDomain: "unichat-2127d.firebaseapp.com",
    projectId: "unichat-2127d",
    storageBucket: "unichat-2127d.appspot.com",
    messagingSenderId: "408784159529",
    appId: "1:408784159529:web:a9f89ff7ef9e1923eb2d38"
  }).auth();
  
