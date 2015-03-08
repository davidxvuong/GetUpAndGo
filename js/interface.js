var EARTH_RADIUS = 6371;
var initLat;
var initLong;
var finLat;
var finLong;
var radius = 5;
var vehicle = "walk";

function getPoint(initLat, initLong, radius) {
	var maxDeg = radtoDeg(radius / EARTH_RADIUS);
	var randLat = (Math.random() * 2 - 1) * maxDeg;
	var maxLong = Math.sqrt(Math.pow(maxDeg,2) - Math.pow(randLat,2));
	var randLong = (Math.random() * 2 - 1) * maxLong;
	console.log(randLat + ", " + randLong);
	finLat = initLat + randLat;
	finLong = initLong + randLong;		
}

function go() {
	console.log("1");
	getPoint(initLat,initLong,radius);
	console.log("2");
	saveVars();
	console.log("3");
	window.location.href = "map.html";
}

function setVehicle(ride) {
	switch(ride) {
		case "walk": 
			radius = 1.5;
			vehicle = "walk";
			break;
		case "bike":
			radius = 5;
			vehicle = "bike";
			break;
		case "bus":
			radius = 40;
			vehicle = "bus";
			break;
		case "car":
			radius = 100;
			vehicle = "car";
			break;
		default:
			radius = 0;
			vehicle = undefined;
	}
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
	sessionStorage.setItem("initLat", initLat);
	sessionStorage.setItem("initLong", initLong);
	sessionStorage.setItem("finLat", finLat);
	sessionStorage.setItem("finLong", finLong);
	sessionStorage.setItem("vehicle", vehicle);
	sessionStorage.setItem("autoSave", true);
}

function radtoDeg(value) {
	return value * 180 / Math.PI;
}

function degtoRad(value) {
	return value * Math.PI / 180;
}

window.onload = function onload() {
	navigator.geolocation.getCurrentPosition(function(position) {
		initLat = position.coords.latitude;
		initLong = position.coords.longitude;
	}, function(err) {});
}