// A function to create planets

var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;
var buildcar;
var getCarInfo;
var car;


buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

buildcar = function (car, model, year, color, engine, exhaust) {
    return {
        car: car,
        model: model,
        year: year,
        color: color,
        engine: engine,
        exhaust: exhaust
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

getCarInfo = function (car) {
    return car.car + " " + car.model + " " + car.year + " " + car.color  + car.engine + car.exhaust ;
}

car = buildcar("Ford", "Mustang", 2018, "Black", "v8", "performance Exhaust")

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));
console.log(getCarInfo(car));


/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */