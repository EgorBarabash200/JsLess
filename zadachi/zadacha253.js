/* Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных позициях. */

const arr = [1, 2, 3, 4, 5, 6];
let sumIndexChet = 0;
let sumIndexNeChet = 0;
arr.forEach((item, index) =>{
    if( index % 2 === 0) sumIndexChet +=item;
    if(index % 2 !== 0) sumIndexNeChet += item;
});
console.log(sumIndexChet / sumIndexNeChet);