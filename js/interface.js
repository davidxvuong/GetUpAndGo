var EARTH_RADIUS = 6371;
var initLat = 0;
var initLong = 0;

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

function setRadius(value) {
	radius = value;
	console.log("setRadius function with input " + value + " triggered");
	console.log("Current radius is: " + radius);
}

function loadVars() {
	if (true) { // fix this later
		initLat = sessionStorage.getItem("initLat");
		initLong = sessionStorage.getItem("initLong");
		finLat = sessionStorage.getItem("finLat");
		finLong = sessionStorage.getItem("finLong");
	}
}

function saveVars() {
	if (true) { // fix this later
		sessionStorage.setItem("initLat", initLat);
		sessionStorage.setItem("initLong", initLong);
		sessionStorage.setItem("finLat", finLat);
		sessionStorage.setItem("finLong", finLong);
		console.log("saveVars successfully triggered");
	}
}

function radtoDeg(value) {
	return value * 180 / Math.PI;
}

function degtoRad(value) {
	return value * Math.PI / 180;
}
