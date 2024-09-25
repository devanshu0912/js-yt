// global scope
let a=300
if (true){
    let a=10
    const b=20
    console.log("inner:",a);
}
console.log(a);





//++++++++++++++++++++++ interesting +++++++++++++++
//                      hoisting


//                        : correct (differece in declaration of function )
console.log(addone(5))    
function addone(num){
    return num+1
}
// console.log(addtwo(5))  : error
const addtwo=function(num){
    return num+2
}


