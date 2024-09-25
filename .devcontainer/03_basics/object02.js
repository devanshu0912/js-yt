//const tinderuser=new object()
const tinderuser={}
tinderuser.id="22abc"
tinderuser.name="ravi"
tinderuser.isloggedin=false

//console.log(tinderuser);

// object inside object

const regularuser={
    email: "something@gmail.com",
    fullname:{
        userfullname:{
            firstname:"devanshu",
            lastname:"shukla"
        }
    }
}

console.log(regularuser)

//                 important     
//    we use ?  if not sure the value exits (calling from apis)
console.log(regularuser.fullname?.userfullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2}
//console.log(obj3)

//                assign(basically to add)
//      source are added to target
//              {}-   target 
//       others are source 
//const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)

// but we use this instead of assign
//                                     spread operator

const obj3={...obj1,...obj2}




