/* Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
Слейте эти массивы в новый массив следующим образом:

[1, 2, 'a', 'b', 'c', 3] */


let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];

let result = arr1.concat(arr2);

console.log(result); // [1, 2, 'a', 'b', 'c', 3]
