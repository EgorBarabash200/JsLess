// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let arr = [ 1, 9, 7, 15];
arr.forEach((item) =>{
    let res = item + (item * 0.1);
    console.log(res);
})