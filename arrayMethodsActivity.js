const arr1 = ["Code", "Line"];
const arr2 = ["Fan", " Tobias", "Linux"];
const combinedArray = arr1.concat(arr2);
console.log(combinedArray);

let fruits = ["kiwi", "Mango", "Banana", "Apple"];
fruits.push("Orange");
console.log(array1);

fruits.pop();
console.log(fruits);

let array2 = [1, 2, 3];
array2.shift();
console.log(array2);

const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

const months = ["Jan", "March", "April","June"];
months.splice(1, 0, "Feb");
console.log(months);
months.splice(4, 1, "May");
console.log(months);