let score="33ab"    

let valueinumber=Number(score)
console.log(typeof valueinumber);//   converted to datatype number  but cant be prrinted
console.log(valueinumber); //     NAN : Not a number as it cant be converted to no it contains character (a and b) 

//  true -1 (in number)
// null -0 (in number )
// string = NaN
// false -0 (in number)


// we can also convert a 1 into boolean          BOOLEAN CONVERSION

let isloggedin=1
let booleanisloggedin= Boolean(isloggedin)
console.log( typeof booleanisloggedin)

// ""  = false
// "any stirng"  = true