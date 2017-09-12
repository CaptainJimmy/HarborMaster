# Harbor Master

_**Concept:**_ Small passenger cruising vessel management  There is a possible need in the small passenger vessel industry for management of the vessel(s) in the fleet, consumables such as engine oil, fuel levels, alcohol and beverages, as well as trip manifest logging. Ideally there will be three different consoles, one for captain, one for bartender, and one for manager.  The consoles will be mobile-friendly, and mobile-first. They each perform different functions.</p>

## Captain's Console:
Captain Logs in and is presented with a menu of tasks

**Reports**
Captain is able to view a report of the previous vessel check in and check out, last time the boat was fueled, last date the black tank was pumped, last time the fresh water was filled.

**Weather Reports**
Uses OpenWeatherAPI to get a weather report for the geolocation returned by the mobile

**Check In (Start of Day)**

_selects the vessel he is ‘checking out’ for the day:_

He then goes through the checkout process:

*Fuel levels
*Oil Level
	*Did You Add Oil? How much? How Much is left on board?
*Transmission Oil Level
	*Did You Add Oil? How much? How Much is left on board?
*Is the alternator belt tensioned?
*Black water tank level
*Are there any critical items the manager needs to know about?

Submit the check in procedure.  The Manager is emailed an HTML report.

**Vessel Check Out (End Of Day)**

Vessel shutdown procedures are stepped through one by one.  If there are critical items the manager or next captain needs to know about, There is a spot for it.

**Vessel Trip Manifests**

_USCG Regulations Require a passenger manifest to be stored off the vessel, whether it be paper or electronic.  _

_**Depart:**_ Captain is prompted with the type of trip (sunset cruise, booze cruise, harbor tour, etc, expected duration, number of passengers on board, number of crew on board, names of crew,   departure time(departure time is not necessarily the time of submission). An email is generated automatically upon submission of departure.

**Arrive:**
 Captain is prompted with the arrival time. (as the arrival time is not necessarily the time of submission) The trip is cleared and logged upon submission.   An email is generated automatically upon submission.

**Vessel Procedures:
Vessel is fueled (gallons for each tank are logged)
Black Water tank is pumped out
Fresh Water Tank is Filled
Boat is washed/scrubbed



## Bartender (Future Versions)

**Check In:**
How much ice did you use to ice the boat down?  How many sleeves are left in the ice machine
Did you add any booze to the boat? How many bottles are left in storage?
Did you add any beer to the boat? How many cases remain in storage?
Did you add any wine to the boat? How many bottles remain in storage?
If the items get to low levels, the manager is emailed a check in report of stock levels that are low


**Check Out:**
Did you add any booze to the boat? Which kind did you add? How many bottles are left in storage?
Did you add any beer to the boat? Which kind did you add? How many cases remain in storage?
Did you add any wine to the boat? Which kind did you add? How many bottles remain in storage?
How many rolls of paper towels, toilet paper, sleeves of cups were used?
Is there any item that is low in stock that the manager needs to know about?
If the items get to low levels, the manager is emailed a check in report of stock levels that are low, as well as manager comments etc.


## Manager

*Manager can log in and view reports of the vessels, fuel levels, etc
*Manager can log in and see fuel consumption of vessels per hour
*Manager can see stocks of beverages, ice, etc


###Technologies Used:

*Foundation front end
*Javascript/jquery
*JSON
*AJAX
*Firebase
*Email of reports via server side script
*Openweather API for weather reports
*Pexels API for pictures added to reports and pages


