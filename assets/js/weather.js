// Declare Variables
var lat;
var lon;
var map;

// Document Ready
$(document).ready(function(){

// Get Geolocation 

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      getWeather(lat, lon);
      getMarineLayer(lat, lon);
      getWeatherAlerts(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

// Get Weather Function
function getWeather(lat, lon) {

	var owAPIurl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=4e0ae26b68029fdb4141d49a573c0b8f";

	$.ajax({
    url: owAPIurl,
    dataType: "json",
    type: "GET", 
	})

	.done(function(result) {
      // console.log(result);
      $("#location").html("<b>" + result.city.name + ", " + result.city.country + "</b>");
      $("#desc").html("<b>Current Forecast: </b>" + titleCase(result.list[0].weather[0].description));
      $("#icon").html('<img src=' + "https://openweathermap.org/img/w/" + result.list[0].weather[0].icon + ".png" + ">");
      $("#current-temp").html("<b>Current Temperature: </b>" + result.list[0].main.temp + "°");
      $("#high-temp").html("<b>High: </b>" + result.list[0].main.temp_max + "°");
      $("#low-temp").html("<b>Low: </b>" + result.list[0].main.temp_min + "°");
    
    })
};


// Get Weather Alerts Function
function getWeatherAlerts(lat, lon) {

  // var darkSkyAPI = "https://api.darksky.net/forecast/bdc349b290c747ad495af46a95dee4b4/" + lat + "," + lon + "?exclude=currently,minutely,hourly,flags?lang=x-pig-latin";
    // var wuAPI = "https://api.wunderground.com/api/641846fdf40b615e/alerts/q/" + lat + "," + lon + ".json";
    var wuAPI = "https://api.wunderground.com/api/641846fdf40b615e/alerts/geolookup/q/25.7617,-80.1918.json"

  $.ajax({
    url: wuAPI,
    dataType: "json",
    type: "GET", 
  })

  .done(function(newAlert) {
      // console.log(newAlert);

      if (newAlert.response.features.alerts === 0) {
        $("#alert-title").text("No New Alerts");
      } else{
      $("#alert-title").html("<h3 style='color: red;'>" + newAlert.alerts[0].description + "</h3>");
      $("#alert-start-date").html("<b>Date:  </b>" + newAlert.alerts[0].date);
      $("#alert-exp-date").html("<b>Effective until: </b>" + newAlert.alerts[0].expires);
      $("#alert-summary").text(newAlert.alerts[0].message);
    }
    })
};

// Get Marine Forecast Function
function getMarineLayer(lat, lon) {

  var wuLayAPI = "https://api.wunderground.com/api/641846fdf40b615e/animatedradar/image.gif?centerlat=" + lat + "&centerlon=" + lon + "&radius=100&width=280&height=280&newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50";

    $("#marine-layer").html('<img src=' + wuLayAPI + '>');
  
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
