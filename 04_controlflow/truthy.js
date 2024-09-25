const useremail=""




//flasy values

//false,0,-0,BigInt 0n,"",null ,undefined ,NaN

//truty: 
// "0",'false'," ",[],{},function(){}

const emptyobj={}
if (Object.keys(emptyobj).length===0){
    console.log("object is empty")
}


/// Nullish coalaescing operator (??): null undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15

val1=null ?? 10 ?? 20
console.log(val1)

// terniary operator

// condition ? true :false
const teaprice=100
teaprice>=80 ? console.log("less than 80"): console.log("more than 80")