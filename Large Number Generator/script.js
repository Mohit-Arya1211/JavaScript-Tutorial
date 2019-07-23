//1 - Generate Numbers:
var res = "";
for(var i = 0; i < 1000; i++){
    var randNum = Math.ceil(Math.random()*9);
//2 - Store The Generated Numbers:
res += randNum;
}
console.log(res);
//3 - Insert th Result:
document.write("<p>" + res + "</p>")
