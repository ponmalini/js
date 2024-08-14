let array=[1,2,1,3,];
let n=[];
for(let i=0;i<array.length;i++)
{
    let isNotExist=true;
    for(let k=0;k<n.length;k++)
    {
        if(array[i]==n[k])
        {
            isNotExist=false;
            break;
        }
    }

    if(isNotExist)
    {
        n.push(array[i]);
    }
}
for(let j=0;j<n.length;j++)
{
  console.log(n[j]);
}