/* Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
Поделите сумму первой половины элементов этого массива на сумму второй половины элементов. */

const arr = [1, 2, 3, 4, 5, 6];
let num1 = 0;
let num2 = 0
arr.forEach((item, index) => {
    if(index <= 2){
        num1 += item;
    }else if(index > 2){
        num2 += item;
    }
});

console.log(num1/num2);