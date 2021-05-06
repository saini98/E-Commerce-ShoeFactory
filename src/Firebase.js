import firebase from 'firebase';

var firebaseApp = firebase.initializeApp ( {
    apiKey: "AIzaSyCkSl6hVHgq-4ac6sh0ggqoAfuFmMCr_jo",
    authDomain: "shoe-factory-8d745.firebaseapp.com",
    //databaseURL: "https://shoe-factory-8d745-default-rtdb.firebaseio.com",
    projectId: "shoe-factory-8d745",
    storageBucket: "shoe-factory-8d745.appspot.com",
    messagingSenderId: "872782613722",
    appId: "1:872782613722:web:88815e0f19150edf5a29e3"
    
  });

  var database= firebaseApp.firestore();

  export {database};