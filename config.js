import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDAF38K_-lVI_MlTEu6HUO98CNlyG43eeI",
    authDomain: "pro71-af050.firebaseapp.com",
    projectId: "pro71-af050",
    storageBucket: "pro71-af050.appspot.com",
    messagingSenderId: "567054336013",
    appId: "1:567054336013:web:e21cf17b7ca115d6cb5544"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
