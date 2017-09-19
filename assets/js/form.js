//Role Call
$('#iAmCaptain, #iAmManager').click(function () {
   if (this.id == "iAmCaptain") {
   	  $("#navMenu").removeClass("hide").addClass("show");
   	  $("#roleCall").removeClass("show").addClass("hide");
      $("#divSet1").removeClass("hide").addClass("show");
      $("#divSet2").removeClass("hide").addClass("show");
      $("#divSet3").removeClass("hide").addClass("show");
      $("#divSet4").removeClass("hide").addClass("show");
      $("#divSet5").removeClass("hide").addClass("show");
   }
   else if (this.id == "iAmManager") {
   	  $("#navMenu").removeClass("hide").addClass("show");
   	  $("#roleCall").removeClass("show").addClass("hide");
      $("#divSet6").removeClass("hide").addClass("show");
   }
});

//Captain Check In Form
$("body").on("change", ":radio", function() {
    var radioChoice = (this.id)
    //console.log(radioChoice);
    //Is vessel clean and orderly from the previous day?
    if (radioChoice === "cleanNo") {
    	//console.log("open new div")
    	$("#cleanAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "cleanYes") {
    	//console.log("close new div")
    	$("#cleanAdd").removeClass("show").addClass("hide");
    };
    //Do fuel filters appear clean?
    if (radioChoice === "fuelFiltersNo") {
    	//console.log("open new div")
    	$("#fuelFiltersAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "fuelFiltersYes") {
    	//console.log("close new div")
    	$("#fuelFiltersAdd").removeClass("show").addClass("hide");
    };
    //Is the front belt properly tentioned?
    if (radioChoice === "beltNo") {
    	//console.log("open new div")
    	$("#beltAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "beltYes") {
    	//console.log("close new div")
    	$("#beltAdd").removeClass("show").addClass("hide");
    };
    //Is the engine oil at the proper level?
    if (radioChoice === "engineOilNo") {
    	//console.log("open new div")
    	$("#engineOilAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "engineOilYes") {
    	//console.log("close new div")
    	$("#engineOilAdd").removeClass("show").addClass("hide");
    };
    //Did you add oil?
    //How much oil did you add in quarts?
    if (radioChoice === "addOilYes") {
    	//console.log("open new div")
    	$("#addOilAdd").removeClass("hide").addClass("show");
    	$("#noOilAdd").removeClass("show").addClass("hide");
    } else if (radioChoice === "addOilNo") {
    	//console.log("close new div")
    	$("#addOilAdd").removeClass("show").addClass("hide");
    	$("#noOilAdd").removeClass("hide").addClass("show");
    };
    //Is there any other Non Critical items you'd like to log?
    if (radioChoice === "nonCriticalYes") {
    	//console.log("open new div")
    	$("#nonCriticalAdd").removeClass("hide").addClass("show");
    }else if (radioChoice === "nonCriticalNo") {
    	//console.log("close new div")
    	$("#nonCriticalAdd").removeClass("show").addClass("hide");
    };
    //Is there anything you'd like management to be alerted on immediately?
    if (radioChoice === "alertManagerYes") {
    	//console.log("open new div")
    	$("#alertManagerAdd").removeClass("hide").addClass("show");
    }else if (radioChoice === "alertManagerNo") {
    	//console.log("close new div")
    	$("#alertManagerAdd").removeClass("show").addClass("hide");
    };
});

//Captain Check Out Form
$("body").on("change", ":radio", function() {
    var radioChoice = (this.id)
    //console.log(radioChoice);
    //How much was the safe drop?
    if (radioChoice === "safeDropNo") {
    	//console.log("open new div")
    	$("#safeDropAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "safeDropYes") {
    	//console.log("close new div")
    	$("#safeDropAdd").removeClass("show").addClass("hide");
    };
    //Are there any non critical items to add to the log? 
    if (radioChoice === "nonCriticalNo1") {
    	//console.log("open new div")
    	$("#nonCritical1Add").removeClass("hide").addClass("show");
    } else if (radioChoice === "nonCriticalYes1") {
    	//console.log("close new div")
    	$("#nonCriticalAdd").removeClass("show").addClass("hide");
    };
    //Are there any critical items to alert manager?
    if (radioChoice === "criticalAlertYes") {
    	//console.log("open new div")
    	$("#criticalAlertAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "criticalAlertNo") {
    	//console.log("close new div")
    	$("#criticalAlertAdd").removeClass("show").addClass("hide");
    };
});

//Trip Manifest Log - Departure Form
$("body").on("change", ":radio", function() {
    var radioChoice = (this.id)
    //console.log(radioChoice);
    //Bartrams Gardens Departure Point
    if (radioChoice === "tripBartramsGarden") {
    	//console.log("open new div")
    	$("#bartramsAdd").removeClass("hide").addClass("show");
    	//PROBLEM: DIV CLOSES ONCE RADIOS ARE CHOSEN
    } else if (radioChoice !== "tripBartramsGarden") {
    	//console.log("close new div")
    	$("#bartramsAdd").removeClass("show").addClass("hide");
    };
    //Other Passenger Trip
    if (radioChoice === "tripOtherPass") {
    	//console.log("open new div")
    	$("#otherPassAdd").removeClass("hide").addClass("show");
    } else if (radioChoice !== "tripOtherPass") {
    	//console.log("close new div")
    	$("#otherPassAdd").removeClass("show").addClass("hide");
    };
    //Other Non Passenger Trip
    if (radioChoice === "tripOtherNon") {
    	//console.log("open new div")
    	$("#otherNonAdd").removeClass("hide").addClass("show");
    } else if (radioChoice !== "tripOtherNon") {
    	//console.log("close new div")
    	$("#otherNonAdd").removeClass("show").addClass("hide");
    };
    //Did you leave on time?
    if (radioChoice === "onTimeYes") {
    	//console.log("open new div")
    	$("#onTimeAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "onTimeNo") {
    	//console.log("close new div")
    	$("#onTimeAdd").removeClass("show").addClass("hide");
    };
});

//Captain Trip Manifest - Arrival
$("body").on("change", ":radio", function() {
    var radioChoice = (this.id)
    console.log(radioChoice);
    //Did you arrive on time?
    if (radioChoice === "arriveOnTimeNo") {
    	//console.log("open new div")
    	$("#arriveOnTimeAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "arriveOnTimeYes") {
    	//console.log("close new div")
    	$("#arriveOnTimeAdd").removeClass("show").addClass("hide");
    };
    //Did you arrive on time?
    if (radioChoice === "problemsYes") {
    	//console.log("open new div")
    	$("#problemsAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "problemsNo") {
    	//console.log("close new div")
    	$("#problemsAdd").removeClass("show").addClass("hide");
    };
});

//Vessel Procedures 0-1-2
$("body").on("change", ":radio", function() {
    var radioChoice = (this.id)
    console.log(radioChoice);
    //Was the fwd tank fueled?
    if (radioChoice === "fwdTankFueledYes") {
    	//console.log("open new div")
    	$("#fwdTankFueledAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "fwdTankFueledNo") {
    	//console.log("close new div")
    	$("#fwdTankFueledAdd").removeClass("show").addClass("hide");
    };
    //Was the aft tank fueled?
    if (radioChoice === "aftTankFueledYes") {
    	//console.log("open new div")
    	$("#aftTankFueledAdd").removeClass("hide").addClass("show");
    } else if (radioChoice === "aftTankFueledNo") {
    	//console.log("close new div")
    	$("#aftTankFueledAdd").removeClass("show").addClass("hide");
    };
});