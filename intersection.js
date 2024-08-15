//Write a function to find the intersection of two arrays.
let a=[2,3,4,5,6]
let b=[1,2,5,6,7]
m=[]
a.forEach(i=>{
    if(b.includes(i))
    {
        m.push(i)
    } 
})
console.log('Intesection of two arrays are: '+m)