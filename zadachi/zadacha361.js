// Дан массив со числами. Удалите из него числа, состоящие более чем из трех цифр.

const arr = [112, 33, 555, 6314, 83344, 22];
const array = arr.filter((item) =>{
   if(String(item).length <= 3){
    return item;
   }
});
console.log(array);