const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0)


const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)

const shoppingCart=[
    {
        itemName: "py course",
        price:299
    },
    {
        itemName: "datascience",
        price:199
    },
    {
        itemName: "js course",
        price:499
    }
]

const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay)