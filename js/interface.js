EARTH_RADIUS = 6371;

function getPoint(initLat, initLong, radius) {
	delta = radtoDeg(radius / EARTH_RADIUS);
	randLat = (Math.random() * 2 - 1) * delta;
	maxLong = Math.sqrt(Math.pow(delta, 2) - Math.pow(randLat, 2));
	randLong = (Math.random() * 2 - 1) * maxLong;

	finLat = initLat + randLat;
	finLong = initLong + randLong;
	console.log("Latitude of the destination is " + finLat);
	console.log("Longitude of the destination is " + finLong);
}

function go() {
	console.log("Go function triggered");
	console.log("Current distance is: " + distance);
}

function setDist(value) {
	distance = value;
	console.log("setDist function with input " + value + " triggered");
	console.log("Current distance is: " + distance);
}

function radtoDeg(value) {
	return value * 180 / Math.PI;
}

function degtoRad(value) {
	return value * Math.PI / 180;
}