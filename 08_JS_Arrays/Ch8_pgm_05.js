// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481 ];

var report = getVisitorReport(visitors, 1);

console.log(report);

var getMonthlyVisitorReport = function (monthArray,  weekWanted, dayWanted) {
  var week = monthArray[weekWanted - 1];
  return getVisitorReport (week, dayWanted);
};

var week1 = [ 345, 132, 210, 221, 481, 190, 420 ];
var week2 = [ 410, 250, 320, 180, 450, 220, 380 ];
var week3 = [ 390, 280, 240, 200, 420, 300, 350 ];
var week4 = [ 450, 320, 300, 250, 480, 350, 400 ];
var month = [week1, week2, week3, week4];

console.log(getMonthlyVisitorReport(month, 1, 2));
console.log(getMonthlyVisitorReport(month, 2, 5));
console.log(getMonthlyVisitorReport(month, 3, 4));
console.log(getMonthlyVisitorReport(month, 4, 1));


/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */