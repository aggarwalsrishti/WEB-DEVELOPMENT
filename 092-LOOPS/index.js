console.log("LOOPS");
let a=1;
console.log(a);
console.log(a+1);
console.log(a+2);
for (let i = 0; i < 10; i++) {
    console.log(a+i);
}
let obj={
    name:"Sneha",
    role:"Developer",
    company:"Google"
}
for (const key in obj){
    const element = obj[key];
    console.log(key, element);
}    
for (const element of "SNEHA") {
    console.log(element);
}  
let i=0;
while(i<6){
    console.log(i);
    i++;
}
let ig=0;  
do{
    console.log(ig);
    ig++
}while(ig<3);