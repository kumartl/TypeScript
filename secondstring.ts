var message="hello world"
//console.log(message)
document.getElementById("demo").innerHTML=message;

var x=10;
var y='20'
var z=x+y
//console.log(z)

document.getElementById("demo1").innerHTML=z;


function add(a,b){
    return a+b
}
var h = add(5,5)
//console.log(h)
document.getElementById("demo2").innerHTML=h;