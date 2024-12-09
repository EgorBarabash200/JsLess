// Дан массив с числами. Оставьте в нем только те числа, которые содержат цифру ноль.

const arr = [10, 22, 50, 40, 102, 122];
const array = arr.filter((item) =>{
    if(String(item).includes('0')){
        return item;
    }
});
console.log(array);