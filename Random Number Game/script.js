// 1 - Generate the Random Number:
var random = Math.ceil(Math.random()*10);
console.log(random);

// 2 - Ask the user to guess the random number:
var chancesLeft = 5;

do{
    var num = parseInt(prompt("Guess the number (between 1 - 10)\n " + chancesLeft + "chances left" ));
    if(random === num){
        break;
    }
    chancesLeft--;
}while(chancesLeft !== 0);



//3 - Insert the results:
if(chancesLeft === 0){
    document.write("<p class=error> You Lose </p>")
}else{
    document.write("<p class=success> You Win </p>")
}