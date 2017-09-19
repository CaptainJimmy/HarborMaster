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

            var database = firebase.database();

//captain check in

$("body").on("click", "#captain-check-in-submit", function(event){
	event.preventDefault();
	//grab the vesselname for the correct DB push
 	var vesselName=$('#vessel-name-check-in').val();

 	//if statements for the object
 	console.log("checking logic");
 	console.log($('#runningAft').val());
 	console.log($('#runningFwd').val());

	var newCheckInSubmit = {
		vesselName: vesselName,
		engineHours: $('#engine-hours-in').val(),
		vesselClean: $('#cleanYes').val(),
		vesselDirty: $('#cleanNo').val(),
		cleanComments: $('#cleanAdd').val(),
		fwdTankLevel: $('#fwd-fuel-in').val(),
		aftTankLevel: $('#aft-fuel-in').val(),
		currentActiveTank: $('#runningAft').val()

	}

});



});