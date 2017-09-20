$(document).ready(function() {
    var config = {
        apiKey: "AIzaSyD2IqtC1ckzWzD4vR9ucDFsxwMYWa7PYXI",
        authDomain: "harbormaster-da7e3.firebaseapp.com",
        databaseURL: "https://harbormaster-da7e3.firebaseio.com",
        projectId: "harbormaster-da7e3",
        storageBucket: "harbormaster-da7e3.appspot.com",
        messagingSenderId: "940441283597"
    };
    firebase.initializeApp(config);
    var destinationEmail = "james.reinknecht@gmail.com";
    var database = firebase.database();

    //captain check in

    $("body").on("click", "#captain-check-in-submit", function(event) {
        event.preventDefault();
        //grab the vesselname for the correct DB push
        var vesselName = $('#vessel-name-check-in').val();

        //variables here will be needed for the object and the persistant DB push

        var engineHours = $('#engine-hours-in').val();
        var fwdTankLevel = $('#fwd-fuel-in').val();
        var aftTankLevel = $('#aft-fuel-in').val();
        var currentActiveTank = $('#runningAft').val();
        var blackTankLevel = $('#black-water-in').val();
        var criticalComments = $('#alertManagerAdd').val();
        var currentTimeStamp = moment().format();

        var newCheckInSubmit = {
            "vesselName": vesselName,
            //"date": currentTimeStamp,
            "engineHours": $('#engine-hours-in').val(),
            "vesselClean": $('#cleanYes').val(),
            "vesselDirty": $('#cleanNo').val(),
            //needs logic change
            "cleanComments": $('#cleanAdd').val(),
            "fwdTankLevel": fwdTankLevel,
            "aftTankLevel": aftTankLevel,
            //needs ID / logic change
            "currentActiveTank": currentActiveTank,
            "fuelFiltersClean": $('#fuelFiltersYes').val(),
            "fuelFiltersComments": $('#fuelFiltersAddComment').val(),
            "frontDriveBelt": $('#beltYes').val(),
            "frontDriveComments": $('#beltAddComment').val(),
            "engineOilLevel": $('#engineOilYes').val(),
            //"addedOil": $('#addOilYes').val(),
            //"addedOilAmount": $('#oilAddedAmount').val(),
            //"oilOnBoard": $('#oil-on-board').val(),
            "blackTankLevel": blackTankLevel,
            "nonCriticalComments": $('#nonCriticalAdd').val(),
            "criticalComments": criticalComments
        };
        //path for liberty
        if (vesselName === "Liberty") {
            var dbPath = "/checkinReports/vessel/liberty"
            database.ref(dbPath).push(newCheckInSubmit);
            database.ref("/persistentData/liberty").update({
                "blackTank": {
                    "currentLevel": blackTankLevel
                },
                "engineHours": engineHours,
                "fuel": {
                    "currentFuel": {
                        "aft": aftTankLevel,
                        "fwd": fwdTankLevel,
                        "tankRunningOn": currentActiveTank
                    }
                }

            });


        }
        //path for Patriot
        else if (vesselName === "Patriot") {
            var dbPath = "/checkinReports/vessel/patriot"
            database.ref(dbPath).push(newCheckInSubmit);
            database.ref("/persistentData/patriot").update({
                "blackTank": {
                    "currentLevel": blackTankLevel
                },
                "engineHours": engineHours,
                "fuel": {
                    "currentFuel": {
                        "aft": aftTankLevel,
                        "fwd": fwdTankLevel,
                        "tankRunningOn": currentActiveTank
                    }
                }

            });





        } else {
            console.log("ERROR");
        }

        //Email Functionality for Critical Comments 
        //place holder, possibly changing this to use the API instead of a node.js listener

        if (criticalComments != "") {
            var newEmail = {
                "To": destinationEmail,
                "Subject": "Critical Alert from Captain on " + vesselName,
                "Message": "You are receiving a critical alert from your Captain, submitted at " + currentTimeStamp + ". Attached is his/her comments: " + criticalComments
            };
            database.ref("/outgoingEmails").push(newEmail);
        }

    });

    $("body").on("click", "#captain-check-out-submit", function(event) {
        event.preventDefault();
        var vesselName = $('#vessel-name-out').val();
        var engineHours = $('#engine-hours-out').val();

        var activeTankLevel = $('#active-tank-level-out').val()
        var activeTank = $('#activeTankOut').val();
        var boatCleaned = $('#boatCleanOut').val();
        var barStocked = $('#barStockOut').val();
        var breakersOff = $('#breakersOut').val();
        var lockedUp = $('#lockedOut').val()
        var safeDrop = $('#safeDropOut').val();
        var linesSecure = $('#linesSecuredOut').val();

        var currentTimeStamp = moment().format();


        //actual data again
        var safeDropAmount = $('#safe-drop-amount').val().trim();
        var nonCriticalComments = $('#nonCriticalCommentsOut').val().trim();
        var criticalComments = $('#criticalCommentsOut').val().trim();

        var newCheckOutSubmit = {
            "vesselName": vesselName,
            //"date": currentTimeStamp,
            "engineHours": engineHours,
            "vesselClean": boatCleaned,
            "activeTankLevel": activeTankLevel,
            "barStocked": barStocked,
            "breakersOff": breakersOff,
            "safeDrop": safeDrop,
            "safeDropAmount": safeDropAmount,
            "linesSecure": linesSecure,
            //needs ID / logic change
            "currentActiveTank": activeTank,
            "nonCriticalComments": nonCriticalComments,
            "criticalComments": criticalComments
        }

        if (vesselName === "Liberty") {
            var dbPath = "/checkoutReports/vessel/liberty"
            database.ref(dbPath).push(newCheckOutSubmit);
        } else if (vesselName === "Patriot") {
            var dbPath = "/checkoutReports/vessel/patriot"
            database.ref(dbPath).push(newCheckOutSubmit);
        } else {
            console.log("ERROR AT CHECKOUT")
        };

        //email data
        var messageBody = $('<html>');
        messageBody.append(
            $('<div>').text("Vessel: " + vesselName),
            $('<div>').text("Date Stamp: " + currentTimeStamp),
            $('<div>').text("Engine Hours: " + engineHours),
            $('<div>').text("Vessel Cleaned: " + boatCleaned),
            $('<div>').text("Active Fuel Tank: " + activeTank),
            $('<div>').text("Active Fuel Tank Level: " + activeTankLevel),
            $('<div>').text("Safe Drop: " + safeDrop + " Amount: " + safeDropAmount),
            $('<div>').text("Non Critical Comments: " + nonCriticalComments),
            $('<div>').text("Critical Comments: " + criticalComments)
        );
        var newEmail = {
            "To": destinationEmail,
            "Subject": "Vessel Check Out Report: " + vesselName,
            "Message": "You are receiving a checkout alert from your Captain, submitted at " + currentTimeStamp + " on vessel " + vesselName + ". " + messageBody
        };
        database.ref("/outgoingEmails").push(newEmail);
    });

    //vessel pump out
    $("body").on("click", "#vessel-pumped-out-submit", function(event) {
        event.preventDefault();
        var vesselName = $('#vessel-pumped').val().trim();
        var vesselNameLC = vesselName.toLowerCase();
        var dbPath = '/pumpOutReports/' + vesselNameLC;
        var dateStamp = moment().format();
        var captainName = "PlaceHolderCaptain"
        var newPumpOut = {
            "vesselName": vesselName,
            "date": dateStamp,
            "captainName:": captainName
        }
        database.ref(dbPath).push(newPumpOut);
        dbPath = '/persistentData/' + vesselNameLC + '/blackTank'
        database.ref(dbPath).update({
            "lastPumpedOut": {
                "captainName": captainName,
                "date": dateStamp
            }
        });
    });
    //vessel Fueled
    $("body").on("click", "#vesselFueledSubmit", function(event) {
        var vesselName = $('#vessel-name-out').val().trim();
        var vesselNameLC = vesselName.toLowerCase();
        var dbPath = '/fuelingReports/' + vesselNameLC;
        var dateStamp = moment().format();
        var captainName = "PlaceHolderCaptain"
        var newFueled = {
            "captainName": captainName,
            "date": dateStamp,
            "vesselName": vesselName,
            "gallonsAddedAft": $('#gallonsAddedAft').val().trim(),
            "gallonsAddedFwd": $('#gallonsAddedFwd').val().trim(),
            "amountSpent": $('#fuelAmountSpent').val().trim(),
        }
        database.ref(dbPath).push(newFueled);
    });

    $("body").on("click", "#vesselWashedSubmit", function(event) {
        var vesselName = $('#vessel-watered').val().trim();
        var vesselNameLC = vesselName.toLowerCase();
        var dbPath = '/vesselWashing/' + vesselNameLC;
        var dateStamp = moment().format();
        var captainName = "PlaceHolderCaptain"
        var newWatered = {
            "captainName": captainName,
            "date": dateStamp,
            "vesselName": vesselName,
        };
        database.ref(dbPath).push(newWatered);


    });

    $("body").on("click", "#vesselWashedSubmit", function(event) {

    });

    $('#patriot-status').on('click', function() {
        database.ref('/persistentData/patriot').once("value").then(function(snapshot) {
            //pull info from firebase
            var currentFuelAft = snapshot.val().fuel.currentFuel.aft;
            var currentFuelFwd = snapshot.val().fuel.currentFuel.fwd;
            var currentFuelActive = snapshot.val().fuel.currentFuel.tankRunningOn;
            var fuelLastMeasuredBy = snapshot.val().fuel.lastMeasured.captainName;
            var fuelLastMeasuredDate = snapshot.val().fuel.lastMeasured.date;
            var lastWashedDate = snapshot.val().lastWashed.date;
            var lastWashedBy = snapshot.val().lastWashed.captainName;
            var lastPumpedOut = snapshot.val().blackTank.lastPumpedOut.date;
            var blackWaterTankLevel = snapshot.val().blackTank.currentLevel;
            var oilAmountOnBoard = snapshot.val().oil.amountOnBoard;
            var oilLastAddedDate = snapshot.val().oil.lastAdded.date;
            var oilLastAddedName = snapshot.val().oil.lastAdded.captainName;
            var oilLastAddedAmount = snapshot.val().oil.lastAdded.howMuch;

            var vesselReport = $('#report-output');
            vesselReport.html($('<div class=row>'));
            //build report info into #report-output

            var fuelDiv = $('<div>');
            fuelDiv.addClass("col-xs-6");
            fuelDiv.append(
                $('<div>').text('Current Fuel in Aft Tank: ' + currentFuelAft),
                $('<div>').text('Current Fuel in Fwd Tank: ' + currentFuelFwd),
                $('<div>').text('Active Tank: ' + currentFuelActive),
                $('<div>').text('Fuel Last Measured: ' + fuelLastMeasuredDate),
                $('<div>').text('Fuel Measured By: ' + fuelLastMeasuredBy)
            );
            vesselReport.append(fuelDiv);

            var miscInfoDiv = $('<div>');
            miscInfoDiv.addClass('col-xs-6');
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

    //liberty status report
    $('#liberty-status').on('click', function() {
        database.ref('/persistentData/liberty').once("value").then(function(snapshot) {
            //pull info from firebase
            var currentFuelAft = snapshot.val().fuel.currentFuel.aft;
            var currentFuelFwd = snapshot.val().fuel.currentFuel.fwd;
            var currentFuelActive = snapshot.val().fuel.currentFuel.tankRunningOn;
            var fuelLastMeasuredBy = snapshot.val().fuel.lastMeasured.captainName;
            var fuelLastMeasuredDate = snapshot.val().fuel.lastMeasured.date;
            var lastWashedDate = snapshot.val().lastWashed.date;
            var lastWashedBy = snapshot.val().lastWashed.captainName;
            var lastPumpedOut = snapshot.val().blackTank.lastPumpedOut.date;
            var blackWaterTankLevel = snapshot.val().blackTank.currentLevel;
            var oilAmountOnBoard = snapshot.val().oil.amountOnBoard;
            var oilLastAddedDate = snapshot.val().oil.lastAdded.date;
            var oilLastAddedName = snapshot.val().oil.lastAdded.captainName;
            var oilLastAddedAmount = snapshot.val().oil.lastAdded.howMuch;

            var vesselReport = $('#report-output');
            vesselReport.html($('<div class=row>'));
            //build report info into #report-output

            var fuelDiv = $('<div>');
            fuelDiv.addClass("col-xs-5");
            fuelDiv.append(
                $('<div>').text('Current Fuel in Aft Tank: ' + currentFuelAft),
                $('<div>').text('Current Fuel in Fwd Tank: ' + currentFuelFwd),
                $('<div>').text('Active Tank: ' + currentFuelActive),
                $('<div>').text('Fuel Last Measured: ' + fuelLastMeasuredDate),
                $('<div>').text('Fuel Measured By: ' + fuelLastMeasuredBy)
            );
            vesselReport.append(fuelDiv);

            var miscInfoDiv = $('<div>');
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

    $('#active-trips-refresh').on('click', function() {
        database.ref('/activeTrips').once("value").then(function(snapshot) {
            var tripDiv = $('#active-trips');
            tripDiv.empty();
            tripDiv.html($('<tr>').addClass("reportInfo"));
            tripDiv.append(
                $('<th>').text('Trip Name'),
                $('<th>').text('Vessel'),
                $('<th>').text('Captain'),
                $('<th>').text('Sched. Depart.'),
                $('<th>').text('Actual Depart.'),
                $('<th>').text('Sched Return'),
                $('<th>').text('Pax Count'),
                $('<th>').text('Crew Count'),
                $('<th>').text('Total Souls')
            );



            snapshot.forEach(function(childSnapshot) {
                var tripName = childSnapshot.val().tripName;
                var vessel = childSnapshot.val().vessel;
                var captainName = childSnapshot.val().captainName;
                var schedDepart = childSnapshot.val().scheduledTime;
                var actualDepart = childSnapshot.val().departedTime;
                var schedReturn = childSnapshot.val().scheduledReturn;
                var paxCount = childSnapshot.val().passengerCount;
                var crewCount = childSnapshot.val().crewCount;
                var totalSouls = paxCount + crewCount;
                var newRow = $('<tr>');

                newRow.append(
                    $('<td>').text(tripName),
                    $('<td>').text(vessel),
                    $('<td>').text(captainName),
                    $('<td>').text(schedDepart),
                    $('<td>').text(actualDepart),
                    $('<td>').text(schedReturn),
                    $('<td>').text(paxCount),
                    $('<td>').text(crewCount),
                    $('<td>').text(totalSouls)
                );
                tripDiv.append(newRow);




            });





        });
    });


});