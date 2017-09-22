$(document).ready(function() {

//Role Call
$('#iAmCaptain, #iAmManager').click(function () {
   if (this.id == "iAmCaptain") {
   	  $("#navMenu").removeClass("hide").addClass("show");
   	  $("#roleCall").removeClass("show").addClass("hide");
      $("#divSet1").removeClass("hide").addClass("show");
      $("#bar").removeClass("hide").addClass("show");
      $('#arrival-div').addClass("hide").removeClass("show")
   }
   else if (this.id == "iAmManager") {
   	  $("#navMenu").removeClass("hide").addClass("show");
   	  $("#roleCall").removeClass("show").addClass("hide");
      $("#divSet2").removeClass("hide").addClass("show");
      $("#bar").removeClass("hide").addClass("show");
      $('#arrival-div').addClass("hide").removeClass("show")
   }
});

$('#captainRole, #managerRole').click(function () {
   if (this.id == "captainRole") {
      $("#li1").addClass("active");
      $("#li2").removeClass("active");
      $("#divSet1").addClass("show").removeClass("hide");
      $("#divSet2").removeClass("show").addClass("hide");
      $('#arrival-div').addClass("hide").removeClass("show")
   }
     else if (this.id == "managerRole") {
      $("#li1").removeClass("active");
      $("#li2").addClass("active");
      $("#divSet1").removeClass("show").addClass("hide");
      $("#divSet2").addClass("show").removeClass("hide");
      $('#arrival-div').addClass("hide").removeClass("show")
   }
});

$("body").on("click",'#show-modal-check-in',function(){
    $('#check-in-modal').modal();
      $('#arrival-div').addClass("hide").removeClass("show");
});

$("body").on("click",'#show-modal-check-out',function(){
    $('#check-out-modal').modal();
    $('#arrival-div').addClass("hide").removeClass("show")
});

$("body").on("click",'#show-modal-departure',function(){
    $('#departure-modal').modal();
    $('#arrival-div').addClass("hide").removeClass("show")
});

// $("body").on("click",'#show-arrival-div-captain',function(){
//     $('#arrival-div-captain').addClass("show").removeClass("hide");
//     //$('#arrival-modal').modal();
// });

$("body").on("click",'#show-modal-daily-tasks',function(){
    $('#daily-tasks-modal').modal();
    $('#arrival-div').addClass("hide").removeClass("show")
});


//Captain Check In Form
$("body").on("change", function() {

    //Is vessel clean and orderly from the previous day?
    var vesselClean=$('#vesselCleanFromPrevious').val();
    if (vesselClean==="false") {
    	$("#cleanAdd").removeClass("hide").addClass("show");
    } else if (vesselClean==="true") {
    	$("#cleanAdd").removeClass("show").addClass("hide");
    };

    //Do fuel filters appear clean?
    var filtersClean=$('#fuelFiltersClean').val();

    if (filtersClean==="false") {
    	$("#fuelFiltersAdd").removeClass("hide").addClass("show");
    } else if (filtersClean==="true") {
    	$("#fuelFiltersAdd").removeClass("show").addClass("hide");
    };

    var beltTensioned=$('#beltTensioned').val();
    //Is the front belt properly tentioned?
    if (beltTensioned==="false") {
    	$("#beltAdd").removeClass("hide").addClass("show");
    } else if (beltTensioned==="true") {
    	$("#beltAdd").removeClass("show").addClass("hide");
    };

    var oilProperLevel=$('#oilProperLevel').val();
    //Is the engine oil at the proper level?
    if (oilProperLevel==="false") {
    	$("#engineOilAdd").removeClass("hide").addClass("show");
    } else if (oilProperLevel==="true") {
    	$("#engineOilAdd").removeClass("show").addClass("hide");
    };
    //Did you add oil?
    //How much oil did you add in quarts?

    var oilAdded=$('oilAdded').val();    
    if (oilAdded==="true") {
    	$("#addOilAdd").removeClass("hide").addClass("show");
    	$("#noOilAdd").removeClass("show").addClass("hide");
    } else if (oilAdded==="false") {
    	$("#addOilAdd").removeClass("show").addClass("hide");
    	$("#noOilAdd").removeClass("hide").addClass("show");
    };

    var nonCriticalIems=$('#nonCriticalItems').val();
    //Is there any other Non Critical items you'd like to log?
    if (nonCriticalIems==="true") {
    	$("#nonCriticalAdd").removeClass("hide").addClass("show");
    }else if (nonCriticalIems==="false") {
    	$("#nonCriticalAdd").removeClass("show").addClass("hide");
    };
    //Is there anything you'd like management to be alerted on immediately?
    var criticalItems=$('#criticalItems').val();
    if (criticalItems==="true") {
    	$("#alertManagerAdd").removeClass("hide").addClass("show");
    }else if (criticalItems==="false") {
    	$("#alertManagerAdd").removeClass("show").addClass("hide");
    };

//Captain Check Out Form

    //How much was the safe drop?
    var safeDrop=$('#safeDropOut').val();
    if (safeDrop==="false") {
    	$("#safeDropAdd").removeClass("hide").addClass("show");
    } else if (safeDrop==="true") {
    	$("#safeDropAdd").removeClass("show").addClass("hide");
    }
    var nonCriticalItemsOut=$('#nonCriticalItemsOut').val();
    //Are there any non critical items to add to the log? 
    if (nonCriticalItemsOut==="true") {
    	$("#nonCritical1Add").removeClass("hide").addClass("show");
    } else if (nonCriticalItemsOut==="false") {
    	$("#nonCriticalAdd").removeClass("show").addClass("hide");
    };

    var criticalItemsOut=$('#criticalItemsOut').val();
    //Are there any critical items to alert manager?
    if (criticalItemsOut==="true") {
    	$("#criticalAlertAdd").removeClass("hide").addClass("show");
    } else if (criticalItemsOut==="false") {
    	$("#criticalAlertAdd").removeClass("show").addClass("hide");
    };


//Trip Manifest Log - Departure Form
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
    if (onTime === "false") {
        $("#onTimeAdd").removeClass("hide").addClass("show");
    }
    else if (onTime === "true") {
            $("#onTimeAdd").removeClass("show").addClass("hide");
        };


    //Captain Trip Manifest - Arrival

    //Did you arrive on time?

    var arriveOnTime=$('#arriveOnTime').val();
    if (arriveOnTime==="false"){
        $("#arriveOnTimeAdd").removeClass("hide").addClass("show");
    }
    else if (arriveOnTime==="true"){
        $("#arriveOnTimeAdd").removeClass("show").addClass("hide");
    }

});

});