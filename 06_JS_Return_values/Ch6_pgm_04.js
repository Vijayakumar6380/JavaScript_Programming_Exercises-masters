// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum1 = add(65, 20);
console.log(sum1);

var sum2 = add(50, 23);
console.log(sum2);

var sum3 = add(15, add(18, 26));
console.log(sum3);

var addNumber = function (number1, number2, number3){
	return add(number1, add(number2, number3));
};

var sum4 = addNumber(20, 16, 12);
console.log(sum4);

/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */