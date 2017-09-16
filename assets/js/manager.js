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

  var database=firebase.database();
  //var currentTime=moment()


//event listeners

$('#patriot-status').on('click',function(){
database.ref('/patriot').once("value").then(function(snapshot){
var currentFuelAft=snapshot.val().fuel.currentFuel.aft;
var currentFuelFwd=snapshot.val().fuel.currentFuel.fwd;
var currentFuelActive=snapshot.val().fuel.currentFuel.tankRunningOn;
var fuelLastMeasuredBy=snapshot.val().fuel.lastMeasured.captainName;
var fuelLastMeasuredDate=snapshot.val().fuel.lastMeasured.date;
var lastWashedDate=snapshot.val().lastWashed.date;
var lastWashedBy=snapshot.val().lastWashed.captainName;
var lastPumpedOut=snapshot.val().blackTank.lastPumpedOut.date;
var blackWaterTankLevel=snapshot.val().blackTank.currentLevel;
var oilAmountOnBoard=snapshot.val().oil.amountOnBoard;
var oilLastAddedDate=snapshot.val().oil.lastAdded.date;
var oilLastAddedName=snapshot.val().oil.lastAdded.captainName;
var oilLastAddedAmount=snapshot.val().oil.lastAdded.howMuch;

var vesselReport=$('#report-output');
vesselReport.html($('<div class=row>'));


var fuelDiv=$('<div>');
fuelDiv.addClass("col-xs-5");
fuelDiv.append(
	$('<div>').text('Current Fuel in Aft Tank: ' + currentFuelAft),
	$('<div>').text('Current Fuel in Fwd Tank: ' + currentFuelFwd),
	$('<div>').text('Active Tank: ' + currentFuelActive),
	$('<div>').text('Fuel Last Measured: ' + fuelLastMeasuredDate),
	$('<div>').text('Fuel Measured By: ' + fuelLastMeasuredBy)
	);
vesselReport.append(fuelDiv);

var miscInfoDiv=$('<div>');
miscInfoDiv.addClass('col-xs-5');
miscInfoDiv.append(
	$('<div>').text('Blacktank Last Pumped Out: ' + lastPumpedOut),
	$('<div>').text('Current Blacktank Level (1-10): ' + blackWaterTankLevel),
	$('<div>').text('Last Time Engine Oil Added: ' + oilLastAddedDate),
	$('<div>').text('Added By: ' + oilLastAddedName + ' Amount: ' + oilLastAddedAmount),
	$('<div>').text('Oil on board (QTs): ' + oilAmountOnBoard),
	$('<div>').text('Vessel Last Washed: ' + lastWashedDate + ' By: ' + lastWashedBy),
	);

vesselReport.append(miscInfoDiv);


	});
});


$('#liberty-status').on('click',function(){
database.ref('/patriot').once("value").then(function(snapshot){
var currentFuelAft=snapshot.val().fuel.currentFuel.aft;
var currentFuelFwd=snapshot.val().fuel.currentFuel.fwd;
var currentFuelActive=snapshot.val().fuel.currentFuel.tankRunningOn;
var fuelLastMeasuredBy=snapshot.val().fuel.lastMeasured.captainName;
var fuelLastMeasuredDate=snapshot.val().fuel.lastMeasured.date;
var lastWashedDate=snapshot.val().lastWashed.date;
var lastWashedBy=snapshot.val().lastWashed.captainName;
var lastPumpedOut=snapshot.val().blackTank.lastPumpedOut.date;
var blackWaterTankLevel=snapshot.val().blackTank.currentLevel;
var oilAmountOnBoard=snapshot.val().oil.amountOnBoard;
var oilLastAddedDate=snapshot.val().oil.lastAdded.date;
var oilLastAddedName=snapshot.val().oil.lastAdded.captainName;
var oilLastAddedAmount=snapshot.val().oil.lastAdded.howMuch;

var vesselReport=$('#report-output');
vesselReport.html($('<div class=row>'));


var fuelDiv=$('<div>');
fuelDiv.addClass("col-xs-5");
fuelDiv.append(
	$('<div>').text('Current Fuel in Aft Tank: ' + currentFuelAft),
	$('<div>').text('Current Fuel in Fwd Tank: ' + currentFuelFwd),
	$('<div>').text('Active Tank: ' + currentFuelActive),
	$('<div>').text('Fuel Last Measured: ' + fuelLastMeasuredDate),
	$('<div>').text('Fuel Measured By: ' + fuelLastMeasuredBy)
	);
vesselReport.append(fuelDiv);

var miscInfoDiv=$('<div>');
miscInfoDiv.addClass('col-xs-5');
miscInfoDiv.append(
	$('<div>').text('Blacktank Last Pumped Out: ' + lastPumpedOut),
	$('<div>').text('Current Blacktank Level (1-10): ' + blackWaterTankLevel),
	$('<div>').text('Last Time Engine Oil Added: ' + oilLastAddedDate),
	$('<div>').text('Added By: ' + oilLastAddedName + ' Amount: ' + oilLastAddedAmount),
	$('<div>').text('Oil on board (QTs): ' + oilAmountOnBoard),
	$('<div>').text('Vessel Last Washed: ' + lastWashedDate + ' By: ' + lastWashedBy),
	);

vesselReport.append(miscInfoDiv);


	});
});

//on page load look for active trips
//if rthere are active trips, push the data to #active-trips
// function vesselStatusReport(vesselID){
// var foo=database.ref().DataSnapshot.hasChildren();
// console.log("foo");
// console.log(foo);
// console.log(database.ref().DataSnapshot);

// }
//Patriot Status Report
//pull info from firebase
//build report info
//pusb to #report-output

//liberty status report
//pull info from firebase
//build report info
//pusb to #report-output







});
