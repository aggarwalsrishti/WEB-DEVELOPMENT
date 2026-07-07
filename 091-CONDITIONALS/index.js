console.log("Hello World");
let age=17;
let grace=3;
console.log(age+grace);
console.log(age-grace);
console.log(age*grace);
console.log(age/grace);
console.log(age**grace);
console.log(age%grace);
if(age>=18){ 
    console.log("U CAN VOTE");
}
else{
    console.log("U CANNOT VOTE")
}
if(age+grace>=18){ 
    console.log("U CAN VOTE");
}
else{
    console.log("U CANNOT VOTE")
}
age+=grace;
console.log(age);
//single-line comment
/*
multi-
line
Comment*/
let a=6;
let b=8;
let c=a>b?(a-b):(b-a);
console.log(c)
if(a>b){
    let c=a-b;
}
else{
    let c=b-a;
}
console.log(c)