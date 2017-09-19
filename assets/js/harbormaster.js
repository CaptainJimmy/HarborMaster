// DO NOT USE... FOR REFERENCE ONLY



// DO NOT USE

// Ready Document
$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2IqtC1ckzWzD4vR9ucDFsxwMYWa7PYXI",
    authDomain: "harbormaster-da7e3.firebaseapp.com",
    databaseURL: "https://harbormaster-da7e3.firebaseio.com",
    projectId: "harbormaster-da7e3",
    storageBucket: "harbormaster-da7e3.appspot.com",
    messagingSenderId: "940441283597"
  };
  firebase.initializeApp(config);

  // declare variable for Firebase database
  var database = firebase.database();

    // New Vessel Object to be pushed up to Database
    var newVessel = {
      // name: name,
      // lastwashed: {
      //   captain: captainName,
      //   date: date,
      // },
      // fuel: {
      //   currentfuellevels: {
      //     aft:{
      //       fuellevel: aftfuellevel,
      //     },
      //     fwd:{
      //       fuellevel: fwdfuellevel,
      //     },
      //   },
      //   lastmeasured: {
      //     captain: captainName,
      //     date: date,
      //     level: {
      //       aft:{
      //       fuellevel: aftfuellevel,
      //     },
      //       fwd:{
      //       fuellevel: fwdfuellevel,
      //     },
      //     },
      //   },
      //   lastfueled: {
      //     captain: captainName,
      //     date: date,
      //     gallonsadded:{
      //       aft:{
      //         gallons: gallons,
      //       },
      //       fwd:{
      //         gallons: gallons,
      //       },
      //     },
      //   },
      // oil: {
      //   oilonboard: quartsofoil,
      //   lastadded: {
      //     captain: captainName,
      //     date: date,
      //   },
      // },
      // },
    };

    // Pushs New Vessel Data to Firebase
    database.ref().push(newVessel);
  });

