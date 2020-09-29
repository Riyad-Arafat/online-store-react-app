import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var Config = {
    apiKey: "AIzaSyALNZWgtjthmrA0Twl1XMocdu9b4wDX0dE",
    authDomain: "store-react-app-29d40.firebaseapp.com",
    databaseURL: "https://store-react-app-29d40.firebaseio.com",
    projectId: "store-react-app-29d40",
    storageBucket: "store-react-app-29d40.appspot.com",
    messagingSenderId: "71380867060",
    appId: "1:71380867060:web:a75fbbe3e7a02954fe8ba1",
    measurementId: "G-KXZN0D7MXF"
    };
// Initialize Firebase
firebase.initializeApp(Config);
firebase.firestore()



export default firebase