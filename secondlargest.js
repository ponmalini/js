let array = [10,32, 56, 12, 19];
let largest = array[0];
let secondlargest = array[0];
for (let i = 0; i < array.length; i = i + 1) {
    if (largest < array[i]) {
        largest = array[i];
    }
}

console.log(largest);

for (let i = 0; i < array.length; i = i + 1) {

    if (secondlargest < array[i] && largest !== array[i]) {
        secondlargest = array[i];

    }
}
console.log(secondlargest);