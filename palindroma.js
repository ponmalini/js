let arr = [3, 6, 0, 6, 3];
let n = "Palindrome";
for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i])
    {
        n = "Not Palindrome";
        break;
    }
}
console.log(n);
