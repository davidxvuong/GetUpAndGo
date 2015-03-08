var map;
var initLatLng;
var finalLatLng;
var travelMethod;

function initialize() {
	var myLatlng = new google.maps.LatLng(53.854234, -97.318359);
	var mapOptions = {
        center:myLatlng,
        zoom:3,
        disableDefaultUI:true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	
	var start = markerFactory(initLatLng, map, "Start");
	var end = markerFactory(finalLatLng, map, "Destination");
	var travel;
	var directionServices = new google.maps.DirectionsService();
	var directionDisplay = new google.maps.DirectionsRenderer();
	
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

function markerFactory(latLngObj, mapObj, text) {
	var marker = new google.maps.Marker({
		position: latLngObj,
		map: mapObj,
		title: text,
	});
	
	return marker;
}

window.onload = function load() {
	/* var initLat = sessionStorage.getItem('initLat');
	var initLng = sessionStorage.getItem('initLong'); */
	var finalLat = sessionStorage.getItem('finLat');
	var finalLng = sessionStorage.getItem('finLong');
	travelMethod = sessionStorage.getItem('vehicle');
	
	if (navigator.geolocation) {
	}
	else {
	}
	
	initLatLng = new google.maps.LatLng(initLat, initLng);
	finalLatLng = new google.maps.LatLng(finalLat, finalLng);
	initialize();
	
	google.maps.event.addDomListener(window, 'load', initialize);
}