import firebase from 'firebase/app' // app = just the base feature of the fb library 
import 'firebase/firestore' //the db
import 'firebase/auth'



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBwZa1rKorOfrmzH098ijDA1LgpSHhWrUI",
    authDomain: "quotes-react-86904.firebaseapp.com",
    databaseURL: "https://quotes-react-86904.firebaseio.com",
    projectId: "quotes-react-86904",
    storageBucket: "",
    messagingSenderId: "409376852084",
    appId: "1:409376852084:web:f67a247c10361810e8e921"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  // .settings({ timestampsInSnapshots: true }) //initialize the fire store and add on settings with object (timeStamp) 

  export default firebase;