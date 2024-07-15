// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("go");
console.log("Index of go: " + charIndex);

var chooseIndex = message.indexOf("choose");
console.log(message.substr(chooseIndex, 6));

var lastIndexOf = message.indexOf("moon");
var ooIndex = message.lastIndexOf("oo", lastIndexOf + 4);
console.log("Index of 'oo' in 'moon': " + ooIndex);

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */