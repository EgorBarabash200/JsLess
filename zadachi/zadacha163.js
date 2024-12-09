// Дан массив с числами. Найдите сумму положительных элементов этого массива.

let arr = [1, 2, -3, -5, 8, 6, -7];
let res = 0;
arr.forEach((item) =>{

    if(item >= 0){
        res += item;
    }

});

console.log(res);