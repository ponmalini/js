//write a function to find the missing number in an array of integers from 1 to n.
let arr=[1,3,2,3,1,5];
let length=arr.length;
let output=[];
for(let i=1;i<=length;i++){
    let isExist=false;
    for(let j=0;j<length;j++){
        if(arr[j]===i)
        {
            isExist=true;
            break;
        }
    }
    if(isExist==false)
    {
        output.push(i);
    }

    
}
for(let k=0;k<output.length;k++){
    console.log(output[k]);
}
 

