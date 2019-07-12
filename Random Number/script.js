//Generate a Random Number:

var genNum = Math.ceil(Math.random() * 5);
console.log(genNum);
// Ask The User to guess the number:
var guessNum = prompt("Guess The Random Number From 1 to 5 : ");

console.log(guessNum);

//Check if the number is correct or not:
if (genNum == guessNum) {
    console.log(true);
    alert("You are Correct");
}
else{
    console.log(false);
    alert("You Lose");
}

