// const score =200
// var  is excuted as global variable
// if (score>100){
//     let power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power : ${power}`);

const balance =1000
// if (balance>500) console.log("test")     bad practice
// if (balance<500){
//     console.log("less than");
// }
// else if (balance<750){
//     console.log("less than 750");
// }
// else if (balance<900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const userloggedin =true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true

if (userloggedin && debitcard){
    console.log("allow to buy course");
}
if (loggedinfromgoogle || loggedinfromemail){
    console.log("user logged in ");
}