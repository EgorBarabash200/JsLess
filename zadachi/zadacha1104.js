/* Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив:

[1, 2, 3, 4, 5, 6] */


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
/*
for(let i of arr1) list.push(i);
for(let item of arr2) list.push(item);
*/
const newList = [...arr1, ...arr2];
console.log(newList);