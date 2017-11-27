//  Episode 1
// It should print out My name is Keith", as name is a global variable.

//  Episode 2
//  It should print out 3, as that's the local variable inside the function, which is what it is returning.

//  Episode 3
//  It should print out the animals alongside their associated numbers from the array inside the function, AND should rewrite myAnimals with that array.

//  Episode 4
//  It should print out 'Suspects include: Jay, Val, Harvey, Rick' When calling allSuspects(). The console log should print out "Suspect three is: Keith", as Harvey was just a local overwrite rather than a global overwrite.

//  Episode 5
//  It should print out 'Poirot', as the function is overwriting the detective['name'] and then printing the detective name.

//  Episode 6
//  It should print out 'The murderer is rick', as the innerfunction is a global overwrite, but actually only overwrites the outerfunction murderer variable, not the global one.
// This one caught me out, initially thought it was Valerie, but ran it and was wrong.


// myEpisode

var winner = 'Chad';

var playTableTennis = function() {
    var playerArray = ["James", "Jamie"];

    var selectWinner = function() {
        var winner = playerArray[Math.round(Math.random())];
    }
    console.log(playerArray[Math.round(Math.random())] + " to serve.");
    console.log(winner + " won the game!");
}

playTableTennis();

console.log("The best player is " + winner);




































// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();
//
// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());
//
//
// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();
//
//
// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );
//
//
// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());
//
//
// var murderer = 'rick';
//
// var outerFunction = function() {
//   var murderer = 'marc';
//
//   var innerFunction = function() {
//     murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log('the murderer is ', murderer);
