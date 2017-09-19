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


            var newCheckInSubmit = {
                "vesselName": vesselName,
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
                "criticalComments": $('#alertManagerAdd').val(),
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
        



    });



});