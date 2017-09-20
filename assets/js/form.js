//Role Call
$('#iAmCaptain, #iAmManager').click(function () {
   if (this.id == "iAmCaptain") {
   	  $("#navMenu").removeClass("hide").addClass("show");
   	  $("#roleCall").removeClass("show").addClass("hide");
      $("#divSet1").removeClass("hide").addClass("show");
      $("#bar").removeClass("hide").addClass("show");
   }
   else if (this.id == "iAmManager") {
   	  $("#navMenu").removeClass("hide").addClass("show");
   	  $("#roleCall").removeClass("show").addClass("hide");
      $("#divSet2").removeClass("hide").addClass("show");
      $("#bar").removeClass("hide").addClass("show");
   }
});


//Captain Check In Form
$("body").on("change", function() {
   // var radioChoice = (this.id)
    //console.log(radioChoice);
    //Is vessel clean and orderly from the previous day?
    var vesselClean=$('#vesselCleanFromPrevious').val();
  //  console.log(vesselClean);
    if (vesselClean==="false") {
    	//console.log("vessel is dirty");
    	$("#cleanAdd").removeClass("hide").addClass("show");
    } else if (vesselClean==="true") {
    	//console.log("vessel is clean");
    	$("#cleanAdd").removeClass("show").addClass("hide");
    };

    //Do fuel filters appear clean?
    var filtersClean=$('#fuelFiltersClean').val();

    if (filtersClean==="false") {
    	//console.log("open new div")
    	$("#fuelFiltersAdd").removeClass("hide").addClass("show");
    } else if (filtersClean==="true") {
    	//console.log("close new div")
    	$("#fuelFiltersAdd").removeClass("show").addClass("hide");
    };

    var beltTensioned=$('#beltTensioned').val();
    //Is the front belt properly tentioned?
    if (beltTensioned==="false") {
    	//console.log("open new div")
    	$("#beltAdd").removeClass("hide").addClass("show");
    } else if (beltTensioned==="true") {
    	//console.log("close new div")
    	$("#beltAdd").removeClass("show").addClass("hide");
    };

    var oilProperLevel=$('#oilProperLevel').val();
    //Is the engine oil at the proper level?
    if (oilProperLevel==="false") {
    	//console.log("open new div")
    	$("#engineOilAdd").removeClass("hide").addClass("show");
    } else if (oilProperLevel==="true") {
    	//console.log("close new div")
    	$("#engineOilAdd").removeClass("show").addClass("hide");
    };
    //Did you add oil?
    //How much oil did you add in quarts?

    var oilAdded=$('oilAdded').val();    
    if (oilAdded==="true") {
    	//console.log("open new div")
    	$("#addOilAdd").removeClass("hide").addClass("show");
    	$("#noOilAdd").removeClass("show").addClass("hide");
    } else if (oilAdded==="false") {
    	//console.log("close new div")
    	$("#addOilAdd").removeClass("show").addClass("hide");
    	$("#noOilAdd").removeClass("hide").addClass("show");
    };

    var nonCriticalIems=$('#nonCriticalItems').val();
    //Is there any other Non Critical items you'd like to log?
    if (nonCriticalIems==="true") {
    	//console.log("open new div")
    	$("#nonCriticalAdd").removeClass("hide").addClass("show");
    }else if (nonCriticalIems==="false") {
    	//console.log("close new div")
    	$("#nonCriticalAdd").removeClass("show").addClass("hide");
    };
    //Is there anything you'd like management to be alerted on immediately?
    var criticalItems=$('#criticalItems').val();
    if (criticalItems==="true") {
    	//console.log("open new div")
    	$("#alertManagerAdd").removeClass("hide").addClass("show");
    }else if (criticalItems==="false") {
    	//console.log("close new div")
    	$("#alertManagerAdd").removeClass("show").addClass("hide");
    };
//});

//Captain Check Out Form
//$("body").on("change", ":radio", function() {
  //  var radioChoice = (this.id)
    //console.log(radioChoice);
    //How much was the safe drop?
    var safeDrop=$('#safeDropOut').val();
    if (safeDrop==="false") {
    	//console.log("open new div")
    	$("#safeDropAdd").removeClass("hide").addClass("show");
    } else if (safeDrop==="true") {
    	//console.log("close new div")
    	$("#safeDropAdd").removeClass("show").addClass("hide");
    }
    var nonCriticalItemsOut=$('#nonCriticalItemsOut').val();
    //Are there any non critical items to add to the log? 
    if (nonCriticalItemsOut==="true") {
    	//console.log("open new div")
    	$("#nonCritical1Add").removeClass("hide").addClass("show");
    } else if (nonCriticalItemsOut==="false") {
    	//console.log("close new div")
    	$("#nonCriticalAdd").removeClass("show").addClass("hide");
    };

    var criticalItemsOut=$('#criticalItemsOut').val();
    //Are there any critical items to alert manager?
    if (criticalItemsOut==="true") {
    	//console.log("open new div")
    	$("#criticalAlertAdd").removeClass("hide").addClass("show");
    } else if (criticalItemsOut==="false") {
    	//console.log("close new div")
    	$("#criticalAlertAdd").removeClass("show").addClass("hide");
    };
//});

//Trip Manifest Log - Departure Form
//$("body").on("change", ":radio", function() {
  //  var radioChoice = (this.id)
    //console.log(radioChoice);
    //Bartrams Gardens Departure Point


///NOT CURRENTLY NEEDED.  WILL BE NEEDED IN FUTURE VERSIONS

    // var tripName=$('#tripName').val();

    // if (tripName === "tripBartrams") {
    // 	//console.log("open new div")
    // 	$("#bartramsAdd").removeClass("hide").addClass("show");
    // 	//PROBLEM: DIV CLOSES ONCE RADIOS ARE CHOSEN
    // }
    //  else if (tripName !== "tripBartrams") {
    // 	//console.log("close new div")
    // 	$("#bartramsAdd").removeClass("show").addClass("hide");
    // }
    // else if (tripName === "tripNonRev"){
    //     $("#otherNonAdd").removeClass("hide").addClass("show");
    // }
    // else if (tripName !== "tripNonRev"){
    //             $("#otherNonAdd").removeClass("show").addClass("hide");
    // };

    // if (radioChoice === "tripOtherPass") {
    // 	//console.log("open new div")
    // 	$("#otherPassAdd").removeClass("hide").addClass("show");
    // } else if (radioChoice !== "tripOtherPass") {
    // 	//console.log("close new div")
    // 	$("#otherPassAdd").removeClass("show").addClass("hide");
    // };
    //Other Non Passenger Trip
   
    // if (nonRevTrip === "tripNonRev") {
    // 	//console.log("open new div")
    // 	$("#otherNonAdd").removeClass("hide").addClass("show");
    // } else if (nonRev !== "tripOtherNon") {
    // 	//console.log("close new div")
    // 	$("#otherNonAdd").removeClass("show").addClass("hide");
    // };
    
    //Did you leave on time?

    var onTime=$('#onTime').val();
   // console.log(onTime);
    if (onTime === "false") {
     //   console.log("NOT ON TIME");
        $("#onTimeAdd").removeClass("hide").addClass("show");
    }
    else if (onTime === "true") {
        //    console.log("ON TIME");
            $("#onTimeAdd").removeClass("show").addClass("hide");
        };
    // if (radioChoice === "onTimeYes") {
    // 	//console.log("open new div")
    // 	$("#onTimeAdd").removeClass("hide").addClass("show");
    // } else if (radioChoice === "onTimeNo") {
    // 	//console.log("close new div")
    // 	$("#onTimeAdd").removeClass("show").addClass("hide");
    // };
//});

//Captain Trip Manifest - Arrival
//$("body").on("change", ":radio", function() {
  //  var radioChoice = (this.id)
  //  console.log(radioChoice);
    


    //Did you arrive on time?


var arrivedOnTime=$('#arriveOnTime').val();
if (arrivedOnTime==="true"){
    $("#arriveOnTimeAdd").removeClass("hide").addClass("show");
}
else if (arrivedOnTime==="false"){
    $("#arriveOnTimeAdd").removeClass("show").addClass("hide");
}
    // if (radioChoice === "arriveOnTimeNo") {
    // 	//console.log("open new div")
    // 	$("#arriveOnTimeAdd").removeClass("hide").addClass("show");
    // } else if (radioChoice === "arriveOnTimeYes") {
    // 	//console.log("close new div")
    // 	$("#arriveOnTimeAdd").removeClass("show").addClass("hide");
    // };
    // //Did you arrive on time?
    // if (radioChoice === "problemsYes") {
    // 	//console.log("open new div")
    // 	$("#problemsAdd").removeClass("hide").addClass("show");
    // } else if (radioChoice === "problemsNo") {
    // 	//console.log("close new div")
    // 	$("#problemsAdd").removeClass("show").addClass("hide");
    // };
//});


//Vessel Procedures
//$("body").on("change", ":radio", function() {
  //  var radioChoice = (this.id)
    //console.log(radioChoice);

    //Was the fwd tank fueled?
    // if (radioChoice === "fwdTankFueledYes") {
    // 	//console.log("open new div")
    // 	$("#fwdTankFueledAdd").removeClass("hide").addClass("show");
    // } else if (radioChoice === "fwdTankFueledNo") {
    // 	//console.log("close new div")
    // 	$("#fwdTankFueledAdd").removeClass("show").addClass("hide");
    // };
    // //Was the aft tank fueled?
    // if (radioChoice === "aftTankFueledYes") {
    // 	//console.log("open new div")
    // 	$("#aftTankFueledAdd").removeClass("hide").addClass("show");
    // } else if (radioChoice === "aftTankFueledNo") {
    // 	//console.log("close new div")
    // 	$("#aftTankFueledAdd").removeClass("show").addClass("hide");
    // };
});