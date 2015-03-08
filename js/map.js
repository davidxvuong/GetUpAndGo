var map;
var initLatLng;
var finalLatLng;

function initialize() {
	var myLatlng = new google.maps.LatLng(53.854234, -97.318359);
	var mapOptions = {
        center:myLatlng,
        zoom:3,
        disableDefaultUI:true,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
	
	var start = new google.maps.Marker(initLatLng);
	var end = new google.maps.Marker(finalLatLng);
	
}

google.maps.event.addDomListener(window, 'load', initialize);

window.onload = function load() {
	/* var initLat = sessionStorage.getItem('initLat');
	var initLng = sessionStorage.getItem('initLng');
	var finalLat = sessionStorage.getItem('finalLat');
	var finalLng = sessionStorage.getItem('finalLng'); */
	//UNCOMMENT CODE WHEN WE MERGE OUR TWO PIECES TOGETHER
	
	var initLat = 45.779309;
	var initLng = -74.002725;
	var finalLat = 45.546993;
	var finalLng = -73.707801;
	
	initLatLng = new google.maps.LatLng(initLat, initLng);
	finalLatLng = new google.maps.LatLng(finalLat, finalLng);
	initialize();
}