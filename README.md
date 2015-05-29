# Get Up and Go!
University of Waterloo EngHack W15

Have been slacking in your house for days?<br>
Want to get some fresh air, but just don't know where to go?<br>
Don't worry! We'll find it for you!<br>
Just choose how you would like to travel, and we will take care the rest!

To see a working copy, [click here](http://davidvuong.ca/GetUpAndGo/).

##Implementation
As shown in this repository, this web app was mainly implemented using JavaScript.This web app was implemented using various web technologies and intuition such as:
- [JavaScript's Navigator object](http://www.w3schools.com/jsref/obj_navigator.asp) to determine the user's current location
- Developing an algorithm that generates longitude and latitude coordinates based on the selected method of travel
- Various [Google Maps API](https://developers.google.com/maps/documentation/javascript/3.exp/reference) to set the map, determine the directions from the user's current location to the generated destination, and nearby places at the destination
- Implementation of a marker factory to display the nearby restaurants and stores at the destination location
- [HTML5 Web Storage](http://www.w3schools.com/html/html5_webstorage.asp) to store information used to store key information between webpages for the session

##Google Maps API
A detailed list of the Google API used in this project.

![Alt text](https://dl.dropboxusercontent.com/u/9118489/Github%20Pictures/GetUpAndGo/api.png)
