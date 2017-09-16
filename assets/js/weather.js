// Declare Variables
var lat;
var lon;

// Document Ready
$(document).ready(function(){

// Get Geolocation 

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

// Get Weather Function

function getWeather(lat, lon) {

	// var darkSkyAPI = "https://api.darksky.net/forecast/c302a50d97629336f69dbb53384f75fb/" + lat + "," + lon;

	var owAPIurl = "http://api.openweathermap.org/data/2.5/forecast?" + lat + "&" + lon + "&units=imperial&APPID=4e0ae26b68029fdb4141d49a573c0b8f";

	$.ajax({
    url: owAPIurl,
    dataType: "json",
    type: "GET", 
	})

	.done(function(result) {
      $("#location").text(result.city.name + ", " + result.city.country);
      $("#desc").html("Current Forecast: " + titleCase(result.list[0].weather[0].description));
      $("#current-temp").text("Current Temperature: " + result.list[0].main.temp + "°");
      $("#high-temp").text("High: " + result.list[0].main.temp_max + "°");
      $("#low-temp").text("Low: " + result.list[0].main.temp_min + "°");
    
    })
};

// Function to Title Case Weather Description

function titleCase(str) {

    str = str.toLowerCase();
    str = str.split(' ');

     for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }

    return str.join(' '); 
    };

});