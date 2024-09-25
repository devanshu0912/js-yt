

function sayMyName(){
    // defintition
    console.log("H");  
    console.log("i"); 
    console.log("t"); 
    console.log("e"); 
    console.log("s");
    console.log("h");               
}
// sayMyName is reference
//sayMyName() to execute

function addtwono(no1,no2){
    console.log(no1+no2)
}
addtwono(3,4);// -> 7
addtwono(3,"4")// ->34











//function calcualtecartprice(num1){
//   return num1  
//}
//console.log(calcualtecartprice(300))
// rest operator and spread operator
//                                   we can give many no as it bundle into array
function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,300,500,600))

const myarray=[300,400,734,876]

function returnseconvalue(yourarray){
    return yourarray[1]
}
console.log(returnseconvalue(myarray))
// we can directly pass the array inside the function called return second value
