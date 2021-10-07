var value1:number=5
var value2:number=6

console.log("VALUE OF VALUE1:" + value1)
console.log("VALUE FO VALUE2:" + value2)


var result= value1>value2
console.log(result)

var result=value1 != value2
console.log(result)



                          // TUPLE with array
const user: [string, any, boolean,number] = ["jo", 10001, true,100];
console.log(user)

                            //UNION
let a: number|string
a=10
a="hi union"
// a=false          it wont be accept the boolean value   
console.log(a)

//                           DECISION MAKING for
//for(var i=0;i<10;i++){
  // console.log(i)}

/* let i=1
for(;i<5;i++){
    console.log(i)
}  */ 

let i=0;
for(;;){
        console.log(i);
   i++;
   if(i<5) 
   break;
} 


//                    STRING

let str:string="hi"
let str1:string="welcome"
console.log(str1)

//                    FUNCTIONS

function funname(a:number,b:number){
return a+b
}

console.log(funname(5,6))

//                      CLASS
class student{}