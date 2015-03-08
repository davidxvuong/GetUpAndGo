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
	
	var markerImg = 'data/pin.png';
	var start = markerFactory(initLatLng, map, markerImg, "Start");
	var end = markerFactory(finalLatLng, map, markerImg, "Destination");
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
			console.log("test");
			console.log(status);
		}
	});
}

function markerFactory(latLngObj, mapObj, image, text) {
	var marker = new google.maps.Marker({
		position: latLngObj,
		map: mapObj,
		icon: image,
		title: text,
	});
	
	return marker;
}

window.onload = function load() {
	/* var initLat = sessionStorage.getItem('initLat');
	var initLng = sessionStorage.getItem('initLong');
	var finalLat = sessionStorage.getItem('finalLat');
	var finalLng = sessionStorage.getItem('finalLong');
	travelMethod = sessionStorage.getItem('travel');*/
	//UNCOMMENT CODE WHEN WE MERGE OUR TWO PIECES TOGETHER
	//to be deleted
	var initLat = 45.779309;
	var initLng = -74.002725;
	var finalLat = 45.546993;
	var finalLng = -73.707801;
	travelMethod = "walk";
	//to be deleted
	
	initLatLng = new google.maps.LatLng(initLat, initLng);
	finalLatLng = new google.maps.LatLng(finalLat, finalLng);
	initialize();
	
	google.maps.event.addDomListener(window, 'load', initialize);
}