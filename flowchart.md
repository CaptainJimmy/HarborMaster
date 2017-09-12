# Captain Check In Flowchart

Ideally the questions are presented in a one question per screen, with a next and a previous question button:


1. Which Vessel are You Checking Into For The Day?  (pulldown?)
	* Liberty
	* Patriot
2. Engine Hours? (textbox)
3. Is the vessel clean and orderly from the previous day? (pulldown)
	* Yes
		* If Yes, Enter Comment in Textbox
	* No
3. Fwd Tank Fuel Level in Inches? (textbox)
4. Aft Tank Fuel Level in Inches? (textbox)
5. Head down below. Which tank is the vessel running on? (pulldown)
	* Fwd
	* Aft
6. Do the Fuel Filters Appear Clean?
	* Yes
	* No
		* If No, Enter Comment in textbox
7. Is the front drive belt properly tensioned?
	* Yes
	* No
		* If No, Enter Comment in textbox
8. Is the engine oil at the proper level?
	* Yes
	* No
		8b. If No, Did you add oil?
			* Yes
				8c. How Much Oil Did You Add in Qts? (texbox)
				8d. Approximately how much oil is left on board that you can see? (textbox)
			* No
				* Why Not? (textbox)
9. Shine a flashlight at the blackwater tank. On a scale of 1-10 How Full is it? (textbox)
10. Is there any other Non Critical items youd like to add to the log?
	* Yes
		* (textbox)
	* No
11. IS there any critical items you'd like Management to be alerted on immediately?
	* Yes
		* (textbox)
	* No

_Submit_


# Captain Check Out Flowchart

1. Which Vessel are You Checking Into For The Day?  (pulldown?)
	* Liberty
	* Patriot
2. Engine Hours? (textbox)
3. Which Tank Did You Run On Today? (pulldown)
	* Fwd
	* Aft
4. Fuel Levels of the tank you ran on? (textbox)
5. Is the boat clean? (checkbox)
	* Yes
	* No
6. Is the trash removed?(checkbox)
	* Yes
	* No
7. Did the bartender restock?(checkbox)
	* Yes
	* No
8. Are all breakers off, including the 24 volt battery cutoff? (checkbox)
	* Yes
	* No
9. Is the wheelhouse locked, and the cash register locked?(checkbox)
	* Yes
	* No
10. Did you do a safe drop? (pulldown)
	* Yes
		10a. How Much Did You Drop? (textbox)
	* No
11. Are the lines secure? (checkbox)
	* Yes
	* No
12. Is there any other Non Critical items youd like to add to the log? (pulldown)
	* Yes
		* (textbox)
	* No
13.  IS there any critical items you'd like Management to be alerted on immediately?
	* Yes
		* (textbox)
	* No

_submit_
	
# Captain Trip Manifest Log

**Departure**
1. Which Vessel Are You Using? (pulldown?)
	* Liberty
	* Patriot
2. Which trip are you doing?
	* Harbor Tour
	* Sunset Cruise
	* City Lights 
	* 2 Hour Private Charter
	* Booze Cruise
	* Penns Landing to Schuykill Banks
	* Walnut to Walnut
	* Secrets of the Schuykill
	* Bartrams Garden: (radio button)
		* Departing Dock?
			* Walnut St
			* Bartrams Garden
	* Seaport Museaum Summer Camp
	* Other Passenger Related Trip
		* (Textbox)
	* Other Non Revenue Trip (fuel, pump out, etc)
		* (Textbox)
3. Scheduled Departure (time)
4. Scheduled Duration (time)
5. Did you leave on time? (check box)
	* Yes
	* No
		* Actual departure (textbox)
6. Number of passengers on board? (textbox)
7. Number of crew on board? (textbox)
8. Names of crew (captain first) on board (textbox)

_submit_

**Arrival** (pulls trip from firebase)
1. Scheduled Arrival Time (time)
2. DId you arrive on time?
	* Yes
	* No
		* Comment Box
3. Any problems that management needs to be alerted about?
	* No
	* Yes
		* Comment Box

_submit_

# Vessel Procedures 

**Waste Tank Pump Out**
* Which Vessel was Pumped out? 
	* Liberty
	* Patriot

_submit_  (date, captain,  is added to the database entry for /VesselName/PumpoutLog)

**Fueling**
1. WHich Vessel Was Fueled?
	* Liberty
	* Patriot
2. Was The Fwd Tank Fueled? 
	* Yes
		2a. What was the forward tank measurement(in inches) prior to fueling? (textbox)
		2b. How many gallons were added to the forward tank? (textbox)
		2c. Is the forward tank full?
			* Yes
			* No
			* Not Sure
	* No
3. Was The Aft Tank Fueled? 
	* Yes
		3a. What was the aft tank measurement(in inches) prior to fueling? (textbox)
		3b. How many gallons were added to the aft tank? (textbox)
		3c. Is the aft tank full?
			* Yes
			* No
			* Not Sure
	* No
4. What was the total amount spent? (textbox)

_submit_  (date, captain, amounts are added to the database entry for /VesselName/FuelLog)

**Fresh Water Tank Fill**
* Which tank was filled? (pulldown or radio)
	* Liberty
	* Patriot
_submit_ (date, captain,  is added to the database entry for /VesselName/FreshWaterLog)

**Vessel Washed**
* Which vessel was washed (pulldown or radio)
	* Liberty
	* Patriot
_submit_ (date, captain,  is added to the database entry for /VesselName/BoatWashLog)


	
