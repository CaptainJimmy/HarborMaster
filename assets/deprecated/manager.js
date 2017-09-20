
// THIS FILE IS DEPRECATED AND NO LONGER NEEDED


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

            var database = firebase.database();
            //var currentTime=moment()


            //event listeners

            //Patriot Status Report



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