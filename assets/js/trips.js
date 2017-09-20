// TESTING PURPOSES ONLY


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


                                console.log(snapshot.val());
                                console.log("testing");


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
                                    $('<td>').text(totalSouls),
                                    $('<a href="#">').addClass("button radius activeTrips").attr("id", tripName).text("Return")
                                );
                                tripDiv.append(newRow);




                            });





                        });
                    });
        });