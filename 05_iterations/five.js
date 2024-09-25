const coding=["js","ruby","jave","python","cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })

//coding.forEach( (item)=> { console.log(item);
//})

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

//  objects inside the array
const mycoding=[
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]

mycoding.forEach( (val)=> {
    console.log(val.languageName);
})