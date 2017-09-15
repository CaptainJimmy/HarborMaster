$(document).ready(function(){

  var config = {
    apiKey: "AIzaSyD2IqtC1ckzWzD4vR9ucDFsxwMYWa7PYXI",
    authDomain: "harbormaster-da7e3.firebaseapp.com",
    databaseURL: "https://harbormaster-da7e3.firebaseio.com",
    projectId: "harbormaster-da7e3",
    storageBucket: "harbormaster-da7e3.appspot.com",
    messagingSenderId: "940441283597"
  };
  firebase.initializeApp(config);




//pseudo code

//event listeners

//check in 
//grab data from submit
//build object
//push object to database
//update() persistant data
//email report (if necessary)


//check out 
//grab data from submit
//build object
//push object to database
//update() persistant data
//email report


//trip manifest
//grab data from submit
//build object
//push object to database (active trips)
//update the active trips
//email the trip departure

//selecting an active trip
// grap the trip data from active trips
// grab the data from the submit
// build an object
//push the object to the complete trips database
//remove the trip from the active table
//email the trip arrival

//vessel tasks:
// Fueling -> updates the persistant data
// buids the object
// adds the object to the fuelingReports

// Vessel washed -> updates the persistant data
// builds the object
//adds the object to vesselWashed

//black tank pumped out --> updates the persistant data
// builds the object
// adds the object to the pumpedOutRecords


































})