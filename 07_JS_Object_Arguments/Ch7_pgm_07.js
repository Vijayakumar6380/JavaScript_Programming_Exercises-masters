// Converting a string to upper case

var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

var getBig = function () {
    var planet = "Earth";
    var bigPlanet = planet.toUpperCase();
    console.log(planet + " becomes " + bigPlanet);
};

var getSmall = function (){
    var planet = "Mars"; 
    var smallPlanet = planet.toLowerCase();
    console.log(planet + " becomes " + smallPlanet);
}

getBig();
getSmall();

/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */