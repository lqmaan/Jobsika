/*
Copy and paste these scripts into the bottom of your <body> tag, but before you use any Firebase services:
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.2.5/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.2.5/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>*/


import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyDc-TiKQytqGsjMgcchYzAwK1jvsSryo3A",
    authDomain: "mobileprogramming-pu2018.firebaseapp.com",
    databaseURL: "https://mobileprogramming-pu2018-default-rtdb.firebaseio.com",
    projectId: "mobileprogramming-pu2018",
    storageBucket: "mobileprogramming-pu2018.appspot.com",
    messagingSenderId: "373764585305",
    appId: "1:373764585305:web:48601eea82769af7d27e48",
    measurementId: "G-EGXCEHJM5F"
  })
  
  const FIREBASE = firebase;

  export default FIREBASE;