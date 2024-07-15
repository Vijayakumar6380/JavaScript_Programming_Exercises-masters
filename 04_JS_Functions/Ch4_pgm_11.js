// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;
var quiz;
var quizInfo

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

let question1, question2, question3;

question1={
    question1: "What is the title of the movie?",
    Option1:"Inside Out",
    Option2: "Spectre",
    Option3: "Star Wars: Episode VII - The Force Awakens"
};

question2= {
    question2: "Who are the actors in the movie?",
    Option1: "Amy Poehler",
    Option2: "Daniel Craig",
    Option3: "Harrison Ford",
};

question3 = {
    question3: "Who is the director of the movie?",
    Option1: "Pete Doctor",
    Option2: "Sam Mendes",
    Option3: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

quizInfo = function(){
    console.log("Welcome to the quiz!");
    console.log("------------------------------");
    console.log("Question 1: " + question1.question1);
    console.log("Option 1: " + question1.Option1);
    console.log("Option 2: " + question1.Option2);
    console.log("Option 3: " + question1.Option3);
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

quiz = question1;
quizInfo();

quiz = question2;
quizInfo();

quiz = question3;
quizInfo();

/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */