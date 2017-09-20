# Database Structure
Here's the idea so far:


# Here is a DB Export in JSON in case you need it:

{
  "activeTrips" : {
    "Sample Trip" : {
      "captainName" : "Harry",
      "crewCount" : 2,
      "crewNames" : "Jim Chandra",
      "departedTime" : "15:02",
      "passengerCount" : 20,
      "scheduledReturn" : "16:00",
      "scheduledTime" : "15:00",
      "timeSubmitted" : "15:05",
      "tripName" : "Sample Cruise",
      "vessel" : "Patriot"
    }
  },
  "checkinReports" : {
    "vessel" : {
      "liberty" : {
        "records" : "go here"
      },
      "patriot" : {
        "records" : "go here"
      }
    }
  },
  "checkoutReports" : {
    "vessel" : {
      "liberty" : {
        "test" : "test"
      },
      "patriot" : {
        "test" : "test"
      }
    }
  },
  "fuelingReports" : {
    "liberty" : {
      "records" : "go here"
    },
    "patriot" : {
      "records" : "go here"
    }
  },
  "loggedIn" : {
    "loginTokens" : "go here"
  },
  "persistentData" : {
    "liberty" : {
      "blackTank" : {
        "currentLevel" : 5,
        "lastPumpedOut" : {
          "captainName" : "Walt",
          "date" : "9/04/2017"
        }
      },
      "fuel" : {
        "currentFuel" : {
          "aft" : 35,
          "fwd" : 11,
          "tankRunningOn" : "aft"
        },
        "lastFueled" : {
          "aftTankGals" : 60,
          "captainName" : "Harry",
          "date" : "9/04/2017",
          "fwdTankGals" : 10
        },
        "lastMeasured" : {
          "captainName" : "Jim",
          "date" : "9/10/2017"
        }
      },
      "lastWashed" : {
        "captainName" : "Walt",
        "date" : "9/08/2017"
      },
      "oil" : {
        "amountOnBoard" : 20,
        "lastAdded" : {
          "captainName" : "walt",
          "date" : "9/07/2017",
          "howMuch" : 3
        }
      }
    },
    "patriot" : {
      "blackTank" : {
        "currentLevel" : 5,
        "lastPumpedOut" : {
          "captainName" : "Walt",
          "date" : "9/04/2017"
        }
      },
      "fuel" : {
        "currentFuel" : {
          "aft" : 34,
          "fwd" : 11,
          "tankRunningOn" : "aft"
        },
        "lastFueled" : {
          "aftTankGals" : 60,
          "captainName" : "harry",
          "date" : "9/02/2017",
          "fwdTankGals" : 10
        },
        "lastMeasured" : {
          "captainName" : "Harry",
          "date" : "9/09/2017"
        }
      },
      "lastWashed" : {
        "captainName" : "Jim",
        "date" : "9/09/2017"
      },
      "oil" : {
        "amountOnBoard" : 25,
        "lastAdded" : {
          "captainName" : "Jim",
          "date" : "9/04/2017",
          "howMuch" : 2
        }
      },
      "placeholder" : "."
    }
  },
  "pumpOutReports" : {
    "liberty" : {
      "records" : "go here"
    },
    "patriot" : {
      "records" : "go here"
    }
  },
  "vesselManifests" : {
    "liberty" : {
      "records" : "go here"
    },
    "patriot" : {
      "records" : "go here"
    }
  },
  "vesselWashing" : {
    "liberty" : {
      "record" : "goes here"
    },
    "patriot" : {
      "record" : "goes here"
    }
  }
}



# These are NOT the actual names of the records, more of a whiteboarding of them

// Persistent DB Records.  These are the items that matter because the data is current, and updated whenever a file is submitted

vessels
	patriot
		lastWashed
			captainName
			date

		fuel
			current fuel levels
				aft
					level
				fwd	
					level
			last time measured
				captain
				date
				level
					aft
					fwd

			last time fueled
				captain
				date
				fwd
				aft 
		oil
			amount on board
			last added
				captainName
				date
    black tank
      last pumped out
        captainName
        date


	liberty
		lastWashed
			captainName
			date

		fuel
			current fuel levels
				aft
					level
				fwd	
					level
			last time measured
				captain
				date
				level
					aft
					fwd

			last time fueled
				captain
				date
				gallons taken
					fwd
					aft 
		oil
			amount on board
			last added
				captain
				date



//These hold the whole records upon submit for historical purposes

checkin reports
	patriot
		records

	liberty
		records

checkout reports
	patriot
    records

	liberty
    records

vessel manifests
	active 
		//When the trip returns, the captain selects the active trip, adds the arrival information, and submits. 
		//The Record then gets submitted to the completed folder and deleted from active.
		
		active trips go here
			captain
			trip
			time scheduled
			passenger count
			crew count
			crew names
			date
			time submitted
			time actually departed
			scheduled duration

	completed
		//records get dumped here
		//sample record
		recordid?
			captain
			trip
			time scheduled
			passenger count
			crew count
			crew names
			date
			time submitted
			time actually departed
			scheduled duration
			time returned
			time return submitted


pumpOutRecords
  liberty
    records go here

  patriot
    records go here

  