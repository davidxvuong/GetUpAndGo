var EARTH_RADIUS = 6371;
var initLat = 0;
var initLong = 0;
var finLat;
var finLong;
var radius = 5;
var vehicle = "walk";

function getPoint(initLat, initLong, radius) {
	var isProperLocation = false;
	var maxDeg;
	var randLat;
	var maxLong;
	var randLong;
	var inArray;
	var testElevation = new google.maps.ElevationService();
	
	while (!isProperLocation) {
		maxDeg = radtoDeg(radius / EARTH_RADIUS);
		randLat = (Math.random() * 2 - 1) * maxDeg;
		maxLong = Math.sqrt(Math.pow(maxDeg,2) - Math.pow(randLat,2));
		randLong = (Math.random() * 2 - 1) * maxLong;
	
		finLat = initLat + randLat;
		finLong = initLong + randLong;
		inArray.push(new google.maps.LatLng(finLat, finLong));
		
		testElevation.getElevationForLocations({'locations': inArray}, function(results, status) {
			if (status === google.maps.ElevationStatus.OK) {
				if (results[0].elevation > 0 ) {
					isProperLocation = true;
				}
				else {
					setTimeout(function(){console.log('200 ms delay');}, 200);
				}
			}
		});
		
	}

	//Debugging code
	console.log("Latitude of the destination is " + finLat);
	console.log("Longitude of the destination is " + finLong);}

function go() {
	getPoint(initLat,initLat,radius);
	saveVars();
	console.log("Go function triggered");
	console.log("Current radius is: " + radius);
	window.location.replace('map.html');
}

function setVehicle(ride) {
	switch(ride) {
		case "walk": 
			radius = 5;
			vehicle = "walk";
			break;
		case "bike":
			radius = 25;
			vehicle = "bike";
			break;
		case "bus":
			radius = 50;
			vehicle = "bus";
			break;
		case "car":
			radius = 100;
			vehicle = "car";
			break;
		default:
			radius = 0;
			vehicle = undefined;
			console.log("Inappropriate vehicle selected")
	}
	console.log("setRadius function with input " + ride + " triggered");
	console.log("Radius = " + radius + ", Vehicle = " + vehicle);
}

function loadVars() {
	if (sessionStorage.getItem("autoSave")) {
		initLat = sessionStorage.getItem("initLat");
		initLong = sessionStorage.getItem("initLong");
		finLat = sessionStorage.getItem("finLat");
		finLong = sessionStorage.getItem("finLong");
		vehicle = sessionStorage.getItem("vehicle");
	}
}

function saveVars() {
	if (true) { // fix this later
		sessionStorage.setItem("initLat", initLat);
		sessionStorage.setItem("initLong", initLong);
		sessionStorage.setItem("finLat", finLat);
		sessionStorage.setItem("finLong", finLong);
		sessionStorage.setItem("vehicle", vehicle);
		sessionStorage.setItem("autoSave", true);
		console.log("saveVars successfully triggered");
	}
}

function radtoDeg(value) {
	return value * 180 / Math.PI;
}

function degtoRad(value) {
	return value * Math.PI / 180;
}