// Initialize Firebase
var config = {
    apiKey: "AIzaSyBOETu1FxN07p6jNXBO1oc-maGtSU_w8j0",
    authDomain: "interactivepopulation.firebaseapp.com",
    databaseURL: "https://interactivepopulation-default-rtdb.firebaseio.com",
    projectId: "interactivepopulation",
    storageBucket: "interactivepopulation.appspot.com",
    messagingSenderId: "481557346607",
    appId: "1:481557346607:web:b856db172e0e631a8e49da",
    measurementId: "G-8XGDLN4PMM"
  };
  
  firebase.initializeApp(config);
  
  // Get a reference to the database service
  var database = firebase.database();
  
  // Retrieve data from Firebase Realtime Database
  database.ref('Sheet1/0').once('value').then(function(snapshot) {
    var locationData = snapshot.val();
    console.log("City: " + locationData.City);
    console.log("Population: " + locationData.Population);
    console.log("State: " + locationData.State);
    console.log("Latitude: " + locationData.lat);
    console.log("Longitude: " + locationData.lon);
  });
  