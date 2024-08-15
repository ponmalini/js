//Implement a function to find the index of the first occurence of a target value in an array.
let first=[1,2,3,4,5]
let second=[4]
if(first.includes(second))
{
    let m=first.indexOf(second)
    console.log('Target found at :+m')
}
else{
    console.log('Target not found')
}