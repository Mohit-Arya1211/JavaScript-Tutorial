var products = "apple blackberry banana tomato broccoli pumpkin";
//1- Show a popup and get what the user wants
var whatToDo = prompt("Type '1' to check if a product is available\nType '2' to list all products\nType anything to quit");
/*1-1 if the user types in "2"
we will list all the products
*/
if (whatToDo === '2') {
    document.write("<p class=info>The products available: " + products + "</p>");
} else if (whatToDo === "1") {
    /*1-2 if the user types in "1"
        1-2-1 display another popup to get the name of the product.
     */  
    var product = prompt("Enter the name of the product to see if it's available");
    /*
        -if he looks for a product that is not available, display sorry the product is not available
        -else(the product is available), we display the product is available
    */
    if(products.indexOf(product) === -1){
        document.write("<p class=error>Sorry, the product is not available</p>");
    }else{
        document.write("<p class=success>The product is available</p>");
    }
    
}else{
    document.write("<p class=info>Refresh the page if you want to look for a product or list all the products</p>");
}


/*1-3 if he types in anything, we will display "Refresh the page if you want to look for a product or list all the products"
 */
