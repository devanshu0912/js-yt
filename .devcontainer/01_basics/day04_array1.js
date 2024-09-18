const arr1=[0,1,2,3,4,5]
console.log(arr1);

// push also  used to add elements in the array
arr1.unshift(9)
console.log(arr1);

arr1.shift()
console.log(arr1);

//

console.log(arr1.includes(9));  //   bool type   : true and false  

const newarr=arr1.join()// join converts data types to string
console.log(newarr);



//                 important   +++++++++++++++++++++


// slice and splice 
///                splice manipulates the actual array

const myn1=arr1.slice(1,3) // 3 index valyue not included
console.log("A",myn1);

// checkign the change in orginnarl arrary    ++++++==== no change in original arry ========+++++++++
console.log(arr1);

const myn2=arr1.splice(1,3)
console.log("B",myn2);
console.log("C",arr1);

