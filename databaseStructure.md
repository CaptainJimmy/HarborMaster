# Database Structure
Here's the idea so far:


# Here is a DB Export in JSON in case you need it:

{
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
  "liberty" : {
    "fuel" : {
      "currentFuel" : {
        "aft" : 35,
        "fwd" : 11
      },
      "lastMeasured" : {
        "captainName" : "Jim",
        "date" : "9/10/2017",
        "level" : {
          "aft" : 35,
          "fwd" : 11
        }
      }
    },
    "lastWashed" : {
      "captainName" : "Walt",
      "date" : "9/08/2017"
    },
    "oil" : {
      "amountOnBoard" : 20,
      "lastAdded" : {
        "captainName" : "Walt",
        "date" : "9/07/2017"
      }
    }
  },
  "patriot" : {
    "fuel" : {
      "currentFuel" : {
        "aft" : 5,
        "fwd" : 34
      },
      "lastMeasured" : {
        "captainName" : "Harry",
        "date" : "9/09/2017",
        "level" : {
          "aft" : 34,
          "fwd" : 5
        }
      },
      "oil" : {
        "amountOnBoard" : 20,
        "lastAdded" : {
          "captainName" : "Jim",
          "date" : "9/08/2017"
        }
      }
    },
    "lastWashed" : {
      "captainName" : "Jim",
      "date" : "9/09/2017"
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
				gallons taken
					fwd
					aft 
		oil
			amount on board
			last added
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


	liberty

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


