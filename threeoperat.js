var value1 = 5;
var value2 = 6;
console.log("VALUE OF VALUE1:" + value1);
console.log("VALUE FO VALUE2:" + value2);
var result = value1 > value2;
console.log(result);
var result = value1 != value2;
console.log(result);
// TUPLE 
var user = ["jo", 10001, true, 100];
console.log(user);
//UNION
var a;
a = 10;
a = "hi union";
// a=false          it wont be accept the boolean value   
console.log(a);
//                           DECISION MAKING for
//for(var i=0;i<10;i++){
// console.log(i)}
/* let i=1
for(;i<5;i++){
    console.log(i)
}  */
var i = 0;
for (;;) {
    console.log(i);
    i++;
    if (i < 5)
        break;
}
//                    STRING
var str = "hi";
var str1 = "welcome";
console.log(str1);
//                FUNCTIONS
function funname(a, b) {
    return a + b;
}
console.log(funname(5, 6));
// CLASS
var student = /** @class */ (function () {
    function student() {
    }
    return student;
}());
