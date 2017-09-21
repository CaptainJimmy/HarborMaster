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


    // function for refreshing the trips in the captain console

    function tripRefresh() {
        database.ref('/activeTrips').once("value").then(function(snapshot) {
            var tripDiv = $('#active-trips');
            tripDiv.empty();
            tripDiv.html($('<tr>').addClass("reportInfo"));
            tripDiv.append(
                $('<th>').text('Vessel'),
                $('<th>').text('Trip Name'),
                $('<th>').text('Sched. Depart.'),
                $('<th>').text('Actual Depart.'),
                $('<th>').text('Pax Count'),
                $('<th>').text('Crew Count'),
                $('<th>').text('Crew Names')
            );

            snapshot.forEach(function(childSnapshot) {
                var tripKey = childSnapshot.key;
                var tripName = childSnapshot.val().tripName;
                var vessel = childSnapshot.val().vesselName;
                var schedDepart = childSnapshot.val().scheduledTime;
                var actualDepart = childSnapshot.val().actualDepart;
                var paxCount = childSnapshot.val().paxCount;
                var crewCount = childSnapshot.val().crewCount;
                var crewNames = childSnapshot.val().crewNames;
                var newRow = $('<tr>');

                newRow.append(
                    $('<td>').text(vessel),
                    $('<td>').text(tripName),
                    $('<td>').text(schedDepart),
                    $('<td>').text(actualDepart),
                    $('<td>').text(paxCount),
                    $('<td>').text(crewCount),
                    $('<td>').text(crewNames),
                    $('<a href="#tripManifestReturn">').addClass("button radius activeTrips").attr({
                        "id": tripName,
                        "data-value": tripKey
                    }).text("Returned to Port")
                );
                tripDiv.append(newRow);




            });





        });
        $('#formMessage').text("Trips Refreshed");


    };


    //captain check in

    $("body").on("click", "#captain-check-in-submit", function(event) {
        event.preventDefault();
        //grab the vesselname for the correct DB push
        var vesselName = $('#vessel-name-in').val();
        //variables here will be needed for the object and the persistant DB push
        var engineHours = $('#engine-hours-in').val();
        var fwdTankLevel = $('#fwd-fuel-in').val();
        var aftTankLevel = $('#aft-fuel-in').val();
        var currentActiveTank = $('#fuelTankActive').val();
        var blackTankLevel = $('#black-water-in').val();
        var criticalComments = $('#alertManagerAdd').val();
        var currentTimeStamp = moment().format();

        var newCheckInSubmit = {
            "vesselName": vesselName,
            "date": currentTimeStamp,
            "engineHours": $('#engine-hours-in').val(),
            "vesselClean": $('#vesselCleanFromPrevious').val(),
            "cleanComments": $('#cleanAdd').val(),
            "fwdTankLevel": fwdTankLevel,
            "aftTankLevel": aftTankLevel,
            "currentActiveTank": currentActiveTank,
            "fuelFiltersClean": $('#fuelFiltersClean').val(),
            "fuelFiltersComments": $('#fuelFiltersAdd').val().trim(),
            "frontDriveBelt": $('#beltTensioned').val(),
            "frontDriveComments": $('#beltAddComment').val().trim(),
            "engineOilLevel": $('#oilProperLevel').val(),
            "addedOil": $('#oilAdded').val(),
            "addedOilAmount": $('#addedOilAmount').val(),
            "oilOnBoard": $('#oil-on-board').val(),
            "blackTankLevel": blackTankLevel,
            "nonCriticalComments": $('#nonCriticalAdd').val(),
            "criticalComments": criticalComments
        };

        //path for liberty
        if (vesselName === "Liberty" || vesselName === "liberty") {
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
                        "tankRunningOn": currentActiveTank,
                        "lastMeasured": currentTimeStamp
                    }
                }

            });


        }
        //path for Patriot
        else if (vesselName === "Patriot" || vesselName === "patriot") {
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
                        "tankRunningOn": currentActiveTank,
                        "lastMeasured": currentTimeStamp

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
        $(document).scrollTop(0);

    });

    $("body").on("click", "#captain-check-out-submit", function(event) {
        event.preventDefault();
        var vesselName = $('#vessel-name-out').val();
        var vesselNameLC = vesselName.toLowerCase();
        var engineHours = $('#engine-hours-out').val();

        var activeTankLevel = $('#active-tank-level-out').val();
        var activeTank = $('#activeTankOut').val();
        var boatCleaned = $('#boatCleanOut').val();
        var barStocked = $('#barStockOut').val();
        var breakersOff = $('#breakersOut').val();
        var lockedUp = $('#lockedOut').val();
        var safeDrop = $('#safeDropOut').val();
        var linesSecure = $('#linesSecuredOut').val();

        var currentTimeStamp = moment().format();

        var safeDropAmount = $('#safeDropAdd').val();
        var nonCriticalComments = $('#nonCriticalCommentsOut').val();
        var criticalComments = $('#criticalCommentsOut').val();

        var newCheckOutSubmit = {
            "vesselName": vesselName,
            "date": currentTimeStamp,
            "engineHours": engineHours,
            "vesselClean": boatCleaned,
            "activeTank": activeTank,
            "activeTankLevel": activeTankLevel,
            "barStocked": barStocked,
            "breakersOff": breakersOff,
            "safeDrop": safeDrop,
            "safeDropAmount": safeDropAmount,
            "linesSecure": linesSecure,
            "currentActiveTank": activeTank,
            "nonCriticalComments": nonCriticalComments,
            "criticalComments": criticalComments
        }

        if (vesselName === "Liberty") {
            var dbPath = "/checkoutReports/vessel/liberty";
            database.ref(dbPath).push(newCheckOutSubmit);
        } else if (vesselName === "Patriot") {
            var dbPath = "/checkoutReports/vessel/patriot";
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
        $(document).scrollTop(0);

        // update persistent data 
        // FFuture versions if necessary
    });

    //vessel pump out
    $("body").on("click", "#vessel-pumped-out-submit", function(event) {
        //WORKING
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
        dbPath = '/persistentData/' + vesselNameLC;
        database.ref(dbPath).update({
            "blackTank": {
                "currentLevel": 1,
                "lastPumpedOut": {
                    "captainName": captainName,
                   // "date": dateStamp
                }
            }
        });
        $(document).scrollTop(0);

    });
    //vessel Fueled
    $("body").on("click", "#vesselFueledSubmit", function(event) {
        //WORKING
        var vesselName = $('#vessel-fueled').val();
        var dbPath = '/fuelingReports/' + vesselName;
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
        $(document).scrollTop(0);

    });


    //vessel washed, updates persistent data and sends a record into the folder
    $("body").on("click", "#vesselWashedSubmit", function(event) {
        //WORKING
        var vesselName = $('#vessel-washed').val();
        var vesselNameLC = vesselName.toLowerCase();
        var dbPath = '/vesselWashing/' + vesselName;
        var dateStamp = moment().format();
        var captainName = "PlaceHolderCaptain"
        var newWashed = {
            "captainName": captainName,
            "date": dateStamp,
            "vesselName": vesselName,
        };
        database.ref(dbPath).push(newWashed);
        var persistentDataUpdatePath = '/persistentData/' + vesselNameLC + '/lastWashed/'
        database.ref(persistentDataUpdatePath).update(newWashed);
        $(document).scrollTop(0);



    });
    $("body").on("click", "#waterTankFilledSubmit", function(event) {
        //WORKING
        var vesselName = $('#vessel-watered').val();
        var vesselNameLC = vesselName.toLowerCase();
        var dbPath = '/vesselWatering/' + vesselName;
        var dateStamp = moment().format();
        var captainName = "PlaceHolderCaptain"
        var newWatered = {
            "captainName": captainName,
            "date": dateStamp,
            "vesselName": vesselName,
        };
        database.ref(dbPath).push(newWatered);
        var persistentDataUpdatePath = '/persistentData/' + vesselNameLC + '/freshWater/'
        database.ref(persistentDataUpdatePath).update(newWatered);
        $(document).scrollTop(0);

    });



    $('#patriot-status').on('click', function() {
        database.ref('/persistentData/patriot').once("value").then(function(snapshot) {
            //pull info from firebase
            //console.log(snapshot.val());
            var currentFuelAft = snapshot.val().fuel.currentFuel.aft;
            var currentFuelFwd = snapshot.val().fuel.currentFuel.fwd;
            var currentFuelActive = snapshot.val().fuel.currentFuel.tankRunningOn;
            var lastWashedDate = snapshot.val().lastWashed.date;
            var lastWashedBy = snapshot.val().lastWashed.captainName;
            //var lastPumpedOut = snapshot.val().blackTank.lastPumpedOut.date;
            var blackWaterTankLevel = snapshot.val().blackTank.currentLevel;
            var oilAmountOnBoard = snapshot.val().oil.amountOnBoard;
            var oilLastAddedDate = snapshot.val().oil.lastAdded.date;
            var oilLastAddedName = snapshot.val().oil.lastAdded.captainName;
            var oilLastAddedAmount = snapshot.val().oil.lastAdded.howMuch;

            var vesselReport = $('#report-output');
            vesselReport.html($('<div class="row">'));
            //build report info into #report-output

            var fuelDiv = $('<div>');
            fuelDiv.addClass("small-12");
            fuelDiv.append(
                $('<div>').text('Current Fuel in Aft Tank: ' + currentFuelAft),
                $('<div>').text('Current Fuel in Fwd Tank: ' + currentFuelFwd),
                $('<div>').text('Active Tank: ' + currentFuelActive),
                $('<div>').text('Vessel Last Washed: ' + lastWashedDate + ' By: ' + lastWashedBy)

            );
            vesselReport.append(fuelDiv);

            var miscInfoDiv = $('<div>');
            miscInfoDiv.addClass('small-12');
            miscInfoDiv.append(
              //  $('<div>').text('Blacktank Last Pumped Out: ' + lastPumpedOut),
                $('<div>').text('Current Blacktank Level (1-10): ' + blackWaterTankLevel),
                $('<div>').text('Last Time Engine Oil Added: ' + oilLastAddedDate),
                $('<div>').text('Added By: ' + oilLastAddedName + ' Amount: ' + oilLastAddedAmount),
                $('<div>').text('Oil on board (QTs): ' + oilAmountOnBoard),
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
            var lastWashedDate = snapshot.val().lastWashed.date;
            var lastWashedBy = snapshot.val().lastWashed.captainName;
          //  var lastPumpedOut = snapshot.val().blackTank.lastPumpedOut.date;
            var blackWaterTankLevel = snapshot.val().blackTank.currentLevel;
            var oilAmountOnBoard = snapshot.val().oil.amountOnBoard;
            var oilLastAddedDate = snapshot.val().oil.lastAdded.date;
            var oilLastAddedName = snapshot.val().oil.lastAdded.captainName;
            var oilLastAddedAmount = snapshot.val().oil.lastAdded.howMuch;

            var vesselReport = $('#report-output');
            vesselReport.html($('<div class=row>'));
            //build report info into #report-output

            var fuelDiv = $('<div>');
            fuelDiv.addClass("small-12");
            fuelDiv.append(
                $('<div>').text('Current Fuel in Aft Tank: ' + currentFuelAft),
                $('<div>').text('Current Fuel in Fwd Tank: ' + currentFuelFwd),
                $('<div>').text('Active Tank: ' + currentFuelActive),
                $('<div>').text('Vessel Last Washed: ' + lastWashedDate + ' By: ' + lastWashedBy)

            );
            vesselReport.append(fuelDiv);

            var miscInfoDiv = $('<div>');
            miscInfoDiv.addClass('small-12');
            miscInfoDiv.append(
              //  $('<div>').text('Blacktank Last Pumped Out: ' + lastPumpedOut),
                $('<div>').text('Current Blacktank Level (1-10): ' + blackWaterTankLevel),
                $('<div>').text('Last Time Engine Oil Added: ' + oilLastAddedDate),
                $('<div>').text('Added By: ' + oilLastAddedName + ' Amount: ' + oilLastAddedAmount),
                $('<div>').text('Oil on board (QTs): ' + oilAmountOnBoard)
            );

            vesselReport.append(miscInfoDiv);


        });
    });

    //on page load look for active trips
    //if rthere are active trips, push the data to #active-trips


    $('#active-trips-refresh').on('click', function() {

        tripRefresh();

    });

    $('#active-trips-refresh2').on('click', function() {

        tripRefresh();

    });
    //submit new manifest

    $('body').on("click", "#manifest-submit", function(event) {
        event.preventDefault();
        //grab variables
        var vesselName = $('#vesselActiveForTrip').val()
        var tripName = $('#tripName').val();
        //var bartramsDepartingDock=$('#bartramsDepartingDock').val();
        //var otherTripAdd=$('#otherNonAdd').val();
        var scheduledTime = $('#scheduled-departure').val();
        var onTime = $('#onTime').val();
        if (onTime === "true") {
            var actualDepart = scheduledTime;
        } else {
            var actualDepart = $('#actual-departure').val();

        }
        var paxCount = $('#passenger-count').val();
        var crewCount = $('#crew-count').val();
        var crewNames = $('#crew-names').val();
        var timeStamp = moment().format();
        //build object

        var newTrip = {
            "vesselName": vesselName,
            "tripName": tripName,
            "scheduledTime": scheduledTime,
            "onTime": onTime,
            "actualDepart": actualDepart,
            "paxCount": paxCount,
            "crewCount": crewCount,
            "timeStamp": timeStamp,
            "crewNames": crewNames
        }


        //push up to database

        database.ref('/activeTrips').push(newTrip);
        tripRefresh();
        $('#formMessage').text("Trip Submitted Successfully");
        $(document).scrollTop(0);
        //RESET THE FORM

        // RUTHIE LOOK HERE PLZ

        //$('#tripManifest').foundation('resetForm');
        // document.getElementById("#tripManifest").reset();
    });

    // trip arrival 

    $("body").on("click", ".activeTrips", function(event) {
        event.preventDefault();
        var tripKey = $(this).attr('data-value');
        console.log(tripKey);
        var refPath = '/activeTrips/' + tripKey;
        //pull the data of the trip from FB, href sends you to arrival submit
        database.ref(refPath).once("value", function(snapshot) {
            var vesselName = snapshot.val().vesselName;
            var tripName = snapshot.val().tripName;
            var scheduledTime = snapshot.val().scheduledTime;
            var onTime = snapshot.val().onTime;
            var actualDepart = snapshot.val().actualDepart;
            var paxCount = snapshot.val().paxCount;
            var crewCount = snapshot.val().crewCount;
            var timeStampIn = snapshot.val().timeStamp;
            var crewNames = snapshot.val().crewNames;

            //grab variables from form once its submitted

            $("body").on("click", "#tripArrivalSubmit", function(event) {
                event.preventDefault();
                var scheduledArrival = $('#scheduledArrivalTime').val();
                var arriveOnTime = $('#arriveOnTime').val();
                var timeStampOut = moment().format();
                if (arriveOnTime === "true") {
                    var actualArrivalTime = scheduledArrival;
                } else {
                    var actualArrivalTime = $("#arriveOnTimeAdd").val();
                };
                //build object
                var tripArrivedObject = {
                    "vesselName": vesselName,
                    "tripName": tripName,
                    "scheduledTime": scheduledTime,
                    "onTime": onTime,
                    "actualDepart": actualDepart,
                    "paxCount": paxCount,
                    "crewCount": crewCount,
                    "crewNames": crewNames,
                    "timeStampIn": timeStampIn,
                    "scheduledArrival": scheduledArrival,
                    "arriveOnTime": arriveOnTime,
                    "actualArrivalTime": actualArrivalTime,
                    "timeStampOut": timeStampOut
                };
                var dbPath = "/vesselManifests/" + vesselName;
                database.ref(dbPath).push(tripArrivedObject);
                database.ref(refPath).remove();
                tripRefresh();
                $('#formMessage').text("Vessel Arrived Submitted Successfully");
                $(document).scrollTop(0);
            });


        });

    });


});
