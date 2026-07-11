function greet(name){
    console.log("Hello "+name);
    console.log("Namaste "+name);
    console.log("Bye "+name);
}
greet("Sneha")
function sum(a, b,c=1){
    console.log(a+b+c);
}
sum(4,9)
sum(4,9,10)
function sub(a,b){
    return a-b;
}
x=sub(40,10)
console.log("sub of a and b:",sub(9,4));
console.log("sub of a and b:", x);
function multiply(a,b,c=4) {
    console.log(a,b,c);
    return a*b*c;
}
console.log(multiply(3)); /*nan means not a numner*/
console.log(multiply(3,4));
console.log(multiply(3,4,1));
const func1=(x)=>{
    console.log("I am an arrow function ",x)
}
func1(34);
func1(45);