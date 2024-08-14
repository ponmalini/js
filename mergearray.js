let arr1=[1,2,3,4];
let arr2=[5,6,7,8]
function mergeArrays(arr1,arr2)
{
 let mergedArray=[];

for(i=0;i<arr1.length;i++)
{
    mergedArray.push(arr1[i]);
}
for(j=0;j<arr2.length;j++)
{
    mergedArray.push(arr2[j]);
}
return mergedArray;
}
console.log(mergeArrays(arr1,arr2));
