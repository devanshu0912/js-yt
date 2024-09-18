const name ="devanshu"
const repocount=95

// outdated syntax  for concanication:  console.log(name+repocount+"value");

//                 modern syntax
console.log(`hello my  name is ${name} and my repo count is ${repocount}`);
 

const game_name=new String("devanshu")
                                    // function used with string 
const newgn=(game_name.toUpperCase());
console.log(newgn);

console.log(game_name.charAt(2));   
console.log(game_name.indexOf('s'));


const newString = game_name.substring(0, 4)
console.log(newString);

const anotherString = game_name.slice(-8, 4) // it will start from 0 when we provide an invalid address
console.log(anotherString);

//    when we want to hold value in database with no starting and ending space
const nstring = "    devanshu   "
console.log(nstring)
console.log(nstring.trim());





