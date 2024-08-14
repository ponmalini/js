let A = [3,7,9,0,6,0,5,0];
let n = A.length;
let B = new Array(n);
let j = 0;
let count = 0;

for (let i = 0; i < n; i++) {
if (A[i] !== 0) {
B[j] = A[i];
j++;
}
else {
count++;
}
}

while (count > 0) {
B[j] = 0;
count--;
j++;
}

for (let i = 0; i < n; i++) {
console.log(B[i] + " "); 
}
