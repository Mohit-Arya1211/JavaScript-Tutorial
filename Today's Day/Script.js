alert("Hi! User");
// 1 - Get The Date :

var date = new Date();
console.log(date);
 
// 2 - Get the day from the date : 
var today = date.getDay();
console.log(today);
var result;
switch(today){
    case 0 :
        result = "Sunday";
        break;
    case 1 :
        result = "Monday";
        break;
    case 2 :
        result = "Tuesday";
        break;
    case 3 :
        result = "Wednesday";
        break;
    case 4 :
        result = "Thursday";
        break;
    case 5 :
        result = "Friday";
        break;
    case 6 :
        result = "Saturday";
        break;
        
}
// 3 - Ask the user to enter the Day :
var userInput = prompt(" Enter the Today's Day :");
// 4 - We check is it is correct and alert the user :
if(userInput == result){
    alert("You Won");
} 
else{
    alert("You Lose");
}
