var EARTH_RADIUS = 6371;
var initLat = 0;
var initLong = 0;
var finLat;
var finLong;
var radius;
var vehicle;

function getPoint(initLat, initLong, radius) {
	var maxDeg = radtoDeg(radius / EARTH_RADIUS);
	var randLat = (Math.random() * 2 - 1) * maxDeg;
	var maxLong = Math.sqrt(Math.pow(maxDeg,2) - Math.pow(randLat,2));
	var randLong = (Math.random() * 2 - 1) * maxLong;
	
	finLat = initLat + randLat;
	finLong = initLong + randLong;

	//Debugging code
	console.log("Latitude of the destination is " + finLat);
	console.log("Longitude of the destination is " + finLong);}

function go() {
	saveVars();
	console.log("Go function triggered");
	console.log("Current radius is: " + radius);
	window.location.replace('interface2.html');
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
