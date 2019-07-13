// 1- Ask the user to ENter a Value i.e. Yes or No to Play:
var wantToPlay = prompt("Would you like to play a game to get the biggest number of 3 number : <br> Please Enter Y(yes) or N(no) ");
console.log(wantToPlay);

//2- If the user chooses No , then:
if(wantToPlay == "N" || wantToPlay == "no") {
    alert("You don't want to play the guess Game");
}

//3- If the user chooses Yes, then
if(wantToPlay == "Y" || wantToPlay == "yes"){
  //3.1 - Ask for 1st Number
//3.2 - Ask for 2nd Number
//3.3 - Ask for 3rd Number

var first = prompt("Enter the First Number :");
var second = prompt("Enter the Second Number :");
var third = prompt("Enter the Third Number :");
//4- Declare result:

if(first > second && first > third){
    alert(first + " is the Biggest Number among the three. ");
}
if(second > first && second > third){
    alert(second + " is the Biggest Number among the three. ");
}
if(third > first && third > second){
    alert(third + " is the Biggest Number among the three. ");
}

alert("Thank You , Refresh the page to play again");  
}

