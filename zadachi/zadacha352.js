// Дан массив с числами. Оставьте в нем только те числа, которые делятся на 5.

const arr = [1, 10, 6, 25, 50, 5, 22];
const array = arr.filter((item) =>{
    if(item % 5 === 0){
        return item;
    }
});
console.log(array);