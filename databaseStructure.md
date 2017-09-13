# Database Structure
Here's the idea so far:

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
	records
