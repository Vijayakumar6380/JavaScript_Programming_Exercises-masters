// A function to display player information

var player1;
var player2;
var player;
var Name;
var place;
var health;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

Name = {
    name: "Kandra",
    name: "Dax",
}

place = {
    place: "The Dungeon of Doom",
    place: "The Old Library",
};

health = {
    health: 50,
    health: 40
}

Name = function (){
    console.log("Name: " + player.name);
}

place = function(){
    console.log(player.name + " are in " + player.place);
}

health = function(){
    console.log(player.name + " health is " + player.health);
};



player = player1;
Name();
place();
health();

player = player2;
Name();
place();
health();



/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */