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
function tripRefresh(){
database.ref('/activeTrips').once("value").then(function(snapshot) {
                            var tripDiv = $('#active-trips');
                            tripDiv.empty();
                            tripDiv.html($('<tr>').addClass("reportInfo"));
                            tripDiv.append(
                                $('<th>').text('Vessel'),
                                $('<th>').text('Trip Name'),
                                $('<th>').text('Sched. Depart.'),
                                $('<th>').text('Actual Depart.'),
                                $('<th>').text('Sched Return'),
                                $('<th>').text('Pax Count'),
                                $('<th>').text('Crew Count'),
                                $('<th>').text('Crew Names')
                            );



                            snapshot.forEach(function(childSnapshot) {
                                var tripKey = childSnapshot.val().key;
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
                                    $('<a href="#">').addClass("button radius activeTrips").attr({
                                        "id": tripName,
                                        "data-value": tripKey
                                        }).text("Returned to Port")
                                );
                                tripDiv.append(newRow);




                            });





                        });
            $('#formMessage').text("Trips Refreshed");

}
            $('#active-trips-refresh').on('click', function() {

                tripRefresh();
                        
                    });
                //submit new manifest
            $('body').on("click", "#manifest-submit", function(event){
                event.preventDefault();
                                    //grab variables
                var vesselName=$('#vesselActiveForTrip').val()
                var tripName=$('#tripName').val();
                //var bartramsDepartingDock=$('#bartramsDepartingDock').val();
                //var otherTripAdd=$('#otherNonAdd').val();
                var scheduledTime=$('#scheduled-departure').val();
                var onTime=$('#onTime').val();
                if (onTime === "true"){
                    var actualDepart=scheduledTime;
                }
                else {
                    var actualDepart=$('#actual-departure').val();

                }
                var paxCount=$('#passenger-count').val();
                var crewCount=$('#crew-count').val();
                var crewNames=$('#crew-names').val();
                var timeStamp=moment().format();
                                    //build object

                var newTrip={
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

                    //RESET THE FORM

                    // RUTHIE LOOK HERE PLZ

                    //$('#tripManifest').foundation('resetForm');
                  // document.getElementById("#tripManifest").reset();
            });


            //manifest arrival listener
                //grab variables from database
                //grab variables from form
                //build object

                //create finished trip and push

                //remove active trip


        });