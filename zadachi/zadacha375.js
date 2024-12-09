// Через запятую написаны числа. Получите максимальное из этих чисел.

const arr = [1, 22, 567, 33, 6];
let max = 0;
arr.forEach((item) =>{
    if(max < item){
        max = item
    }
});
console.log(max);