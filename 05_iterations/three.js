// array loops

const arr=[1,2,3,4,5]

for (const num of  arr){
    console.log(num);
}

const greetings="namaskar"
for (const greet of greetings){
    console.log(`each char is ${greet}`)
}


// maps : objects collection of key value pairs 
// for unique values
`  `// map are non iterable
const map= new Map()
map.set('in',"rupee")
map.set('$',"dollar")
map.set('in',"india")

//console.log(map);

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    //console.log(programming[key]);
}
