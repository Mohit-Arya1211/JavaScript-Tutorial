// 1 - Ask For Number:
var num = parseInt(prompt("Enter the number for which you want the Multiplication table: "));
// 2 - Check If its a number:
if(!isNaN(num)){
    
  // 2.1 - if yes, we will generate the table:
    var ul = "<ul>"
    for(var i = 0; i<=10; i++){
        var res = num + " * " + i + "  = " + (num * i);
        ul += "<li>" + res + "</li>"
    }
    ul += "</ul>";
    document.write(ul);
     
}
  // 2.1 - if not , alert the user to enter new number:
else{
  alert("Enter a number.")  
}

