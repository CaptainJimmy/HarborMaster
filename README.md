# Harbor Master

_**Concept:**_ There is a need in the small passenger vessel industry for management of the vessel(s) in the fleet, fuel levels, trip manifest logging,  consumables such as engine oil, alcohol, beverages, consumable supplies on hand. Ideally there will are three different consoles for different roles,  captain, bartender, and manager.  The consoles will be mobile-friendly, and mobile-first. They each perform different functions, but they are easily done with the users phone, as they are written with Mobile First idealogy.

Each function/task will store the data in a database (google firebase) as a record, and kept forever. The program will then update certain important parameters in persistent tables that are only relevant at the current time (current fuel levels, engine hours, fresh and black water tank levels, etc), allowing the manager to easily within a couple of clicks find out exactly what he needs to know - such as when the last time the vessel was pumped out, how much ice is in the freezer, fuel on board.

## Contributors
* James Reinknecht - Overall Product Design, Project Manager, JavaScript, Database Schema Design, Database Queries/Updates/Integration, AJAX, Report Creation
* Ruthie Campiz - Front End Design, Form Interactions, JavaScript, UI/UX Design, Database Integration
* William Rainaud - Google Authentication, API Interaction, JavaScript, Database Integration, AJAX, Email Delivery

## *Authentication Done With Google Auth*

## Captain's Console:
Captain Logs in and is presented with a menu of tasks

**Weather Reports**
Uses OpenWeatherAPI to get a weather report for the geolocation returned by the mobile

**Check In (Start of Day)**

_selects the vessel he is ‘checking out’ for the day:_

He then goes through the checkout process, for examples:

* Fuel levels for each tank
* Oil Level
	* Did You Add Oil? How much? How Much is left on board?
* Is the alternator belt tensioned?
* Black water tank level
* Are there any critical items the manager needs to know about?

Submit the check in procedure.  The Manager is emailed an HTML report if there are critical items, otherwise they don't need.

**Vessel Check Out (End Of Day)**

Vessel shutdown procedures are stepped through one by one.  If there are critical items the manager or next captain needs to know about, There is a spot for it.  The manager is emailed an end of day report.

**Vessel Trip Manifests**

_USCG Regulations Require a passenger manifest to be stored off the vessel, whether it be paper or electronic._

_**Depart:**_ Captain is prompted with the type of trip (sunset cruise, booze cruise, harbor tour, etc, expected duration, number of passengers on board, number of crew on board, names of crew,  departure time(departure time is not necessarily the time of submission). An email is generated automatically upon submission of departure.

**Arrive:**
 Captain clicks on the active trips - and is prompted with the arrival time. (as the arrival time is not necessarily the time of submission) The trip is cleared and logged upon submission.   An email is generated automatically upon submission of arrival.

**Vessel Procedures:**
These Are Sometimes Weekly or Daily Tasks.  This is an Excellent way To Log

* Vessel is fueled (gallons for each tank are logged)
* Black Water tank is pumped out
* Fresh Water Tank is Filled
* Boat is washed/scrubbed

A copy of the report is generated, and persistent data fields are update.

**Reports** (Future Versions)
Captain is able to view a report of the previous vessel check in and check out, last time the boat was fueled, last date the black tank was pumped, last time the fresh water was filled.


## Bartender (Future Versions)

**Check In:**
* How much ice did you use to ice the boat down?  How many sleeves are left in the ice machine
* Did you add any booze to the boat? How many bottles are left in storage?
* Did you add any beer to the boat? How many cases remain in storage?
* Did you add any wine to the boat? How many bottles remain in storage?
* If the items get to low levels, the manager is emailed a check in report of stock levels that are low


**Check Out:**
Did you add any booze to the boat? Which kind did you add? How many bottles are left in storage?
Did you add any beer to the boat? Which kind did you add? How many cases remain in storage?
Did you add any wine to the boat? Which kind did you add? How many bottles remain in storage?
How many rolls of paper towels, toilet paper, sleeves of cups were used?
Is there any item that is low in stock that the manager needs to know about?
If the items get to low levels, the manager is emailed a check in report of stock levels that are low, as well as manager comments etc.


## Manager

*Manager can log in and view reports of the vessels, fuel levels, etc
*Manager can see any active trips
*Manager can see stocks of beverages, ice, etc *(future versions)*
*Manager can log in and see fuel consumption of vessels per hour and create ad-hoc reports *(future versions)*

###Technologies Used:
* Google Authentication
* Foundation front end
* Javascript/jquery
* JSON
* AJAX
* Firebase
* Emailed reports via server GMail API
* Openweather API for weather reports
* GitHub for VCS and Collaboration
