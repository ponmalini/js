let array=[112,130,150,116,111,112];
let maxval=array[0];
let minval=array[0];
for(let i=0;i<array.length;i++)
{
    if(maxval<array[i])
    {
        maxval=array[i];
    }
    
    if(minval>array[i])
    {
        minval=array[i];
    }
}

console.log(maxval);
console.log(minval);
