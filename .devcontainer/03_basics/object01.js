// creation 
// symbol creation 
const mysym=Symbol("key1")
const jsuser={
    name:"devanshu",
    age:19,
    location:"lucknow",
    [mysym]:"mykey1value"
}

// accessing 

console.log(jsuser.name)
console.log(jsuser["name"])
console.log(jsuser[mysym])

//                         to lock an object
// we    use Object.freeze(jsuser)

jsuser.greeting=function(){
    console.log("hello js user")
}
console.log()
