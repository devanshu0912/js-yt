const user={
    username:"hitest",
    price:999,

    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`)
    }
}

//user.welcomemessage()





//             arrrow function 

//      explicitly return funciton 
// const addtwo=(num1,num2)=>{
//   return num1+num2
// }
//                both are same 
//                implicitly return function


const addtwo=(num1,num2)=>(num1+num2)