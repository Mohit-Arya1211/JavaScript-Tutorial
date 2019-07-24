// 1 - Get a Number:
var num = parseInt(prompt("Enter the number upto which you want to print the odd and even numbers :"));
console.log(num);
// 2 - Check if its a number:
if (!isNaN(num)){
    // 3 - Calculate the odd and even number:
    var evenContainer = "<div class=even><h2>EVEN</h2><ul>"
    var oddContainer = "<div class=odd><h2>EVEN</h2><ul>"
    var odd = "";
    var even = "";
    for (var i = 0; i <= num; i++) {
        if (i % 2 === 0){
            even = "<li>" + i + " is Even </li>";
            evenContainer += even;
        } 
        else {
            odd = "<li>" + i + " is Odd </li>";
            oddContainer += odd;
        }
    }
    evenContainer += "</ul></div>"
    oddContainer += "</ul></div>"

//4 - Print the Numbers:
document.write(evenContainer);
document.write(oddContainer)

} 






