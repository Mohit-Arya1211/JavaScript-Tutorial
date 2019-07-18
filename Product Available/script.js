//0 Product List :
var products = "apple  blackberry pumpkin broccoli banana tomato";
// 1- Show a Pop Up And  Get the input for what user want:
var whatToDo = prompt("Type '1' to check is the product is available \n, Type '2' to get the list of all the products \n , type anything else to quit .");
console.log(whatToDo);
  /* 1.2 - If User Do not want to Search :
     If the User type "2" , We will display all the product :
*/ 
if(whatToDo==='2'){
    console.log();
    document.write("<p class=Info> The Products available in store are : "  + products "</p>" );
}
else if (whatToDo==='1'){
    
}

/* 1.3- If the user types "1", the page will display a pop up to get the name of the product,
-if the product ,is not available 
display the Error Message:
-else display the Success message for the vailable product:
*/

/*1.4- if the user types in anything else , we will display "Refresh the page to reload the list of all the products available.
*/