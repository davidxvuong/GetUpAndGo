var map;
var initLatLng;
var finalLatLng;
var travelMethod;
var infoWindow;
var nearby_places;

function initialize() {
	var myLatlng = new google.maps.LatLng(53.854234, -97.318359);
	var mapOptions = {
        center:myLatlng,
        zoom:3,
        disableDefaultUI:true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	
	var travel;
	var directionServices = new google.maps.DirectionsService();
	var directionDisplay = new google.maps.DirectionsRenderer();
	
	infoWindow = new google.maps.InfoWindow();
	nearby_places = new google.maps.places.PlacesService(map);
	google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);
	
	directionDisplay.setMap(map);
	directionDisplay.setPanel(document.getElementById('directions'));
	
	switch(travelMethod) {
		case "walk":
			travel = google.maps.TravelMode.WALKING;
			break;
		case "bus":
			travel = google.maps.TravelMode.TRANSIT;
			break;
		case "bike":
			travel = google.maps.TravelMode.BICYCLING;
			break;
		case "car":
			travel = google.maps.TravelMode.DRIVING;
			break;
	}
	
	var directionRequest = {
		origin: initLatLng,
		destination: finalLatLng,
		travelMode: travel,
		unitSystem: google.maps.UnitSystem.METRIC,
	};
	
	
	directionServices.route(directionRequest, function(response, status) {
		if (status === google.maps.DirectionsStatus.OK){
			directionDisplay.setDirections(response);
		}
		else {
			console.log(status);
		}
	});
}

function performSearch() {
	var request = {
		location: finalLatLng,
		radius: '1500',
		types: ['store']
	};
	
	nearby_places.radarSearch(request, function(results, status) {
		if (status === google.maps.places.PlacesServiceStatus.OK) {
			for (var i = 0, result; i < 20; i++) {
				result = results[i];
				
				markerFactory(result);
			}
		}
		else {
			console.log(status);
		}
	});
}

function markerFactory(place) {
	
	var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: {
      // Star
      path: 'M 0,-24 6,-7 24,-7 10,4 15,21 0,11 -15,21 -10,4 -24,-7 -6,-7 z',
      fillColor: '#ffff00',
      fillOpacity: 1,
      scale: 1/4,
      strokeColor: '#bd8d2c',
      strokeWeight: 1
    }
  });

  google.maps.event.addListener(marker, 'click', function() {
    nearby_places.getDetails(place, function(result, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        infoWindow.setContent(result.name);
		infoWindow.open(map, marker);
      }
      
    });
  });
}

window.onload = function load() {
	var initLat = sessionStorage.getItem('initLat');
	var initLng = sessionStorage.getItem('initLong');
	var finalLat = sessionStorage.getItem('finLat');
	var finalLng = sessionStorage.getItem('finLong');
	travelMethod = sessionStorage.getItem('vehicle');
	
	initLatLng = new google.maps.LatLng(initLat, initLng);
	finalLatLng = new google.maps.LatLng(finalLat, finalLng);
	console.log("Initial Location: " + initLatLng);
	console.log("Final Location: " + finalLatLng);
	initialize();
	
	google.maps.event.addDomListener(window, 'load', initialize);
}