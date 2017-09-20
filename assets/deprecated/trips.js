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

    }
    $('#active-trips-refresh').on('click', function() {

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
        //console.log(tripKey);
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
                var arrivedOnTime = $('#arrivedOnTime').val();
                var timeStampOut = moment().format();
                if (arrivedOnTime === "true") {
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
                    "arrivedOnTime": arrivedOnTime,
                    "actualArrivalTime": actualArrivalTime,
                    "timeStampOut": timeStampOut
                };


                     //create finished trip and push

                var dbPath = "/vesselManifests/" + vesselName;
                database.ref(dbPath).push(tripArrivedObject);
                    //remove active trip

                database.ref(refPath).remove();

                //refresh the active trips
                tripRefresh();

                $('#formMessage').text("Vessel Arrived Submitted Successfully");
                $(document).scrollTop(0);
            });


        });

    });



});