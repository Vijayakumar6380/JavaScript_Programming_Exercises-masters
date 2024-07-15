// Moving a point in 2D

var point1;
var point2;
var move;
var showPoint;
var rotate90;

move = function (point, change) {
    return {
        x: point.x + change.x,
        y: point.y + change.y
    };
};

showPoint = function (point) {
    console.log("( " + point.x + " , " + point.y + " )");
};

var reflectX = function () {
    return { 
        x : -point2.x,
        y : point2.y 
        };
};

rotate90 = function () {
    return {
        x : -point2.y,
        y : point2.x
        };
};

point1 = { x : 2, y : 5 };

point2 = move(point1, { x : 3, y : 2 });

showPoint(point1);
console.log("Move 3 across and 2 down");
showPoint(point2);

point1 = reflectX(point2);
showPoint(point1);
console.log("Reflect in x-axis");

point1 = rotate90(point2);
showPoint(point1);
console.log("Rotate 90 degrees anticlockwise");





/* Further Adventures
 *
 * 1) Change the amount by which the point is moved
 *    by altering the x and y properties of
 *    the object literal passed to the move function.
 *
 * 2) Write a reflectX function that reflects
 *    a point in the x-axis, returning the new point.
 *
 * 3) How about a rotate90 function that rotates
 *    the point by 90 degrees anticlockwise
 *    around ( 0 , 0 )?
 *
 */