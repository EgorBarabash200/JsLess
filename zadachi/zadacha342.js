/* Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
Поменяйте местами пары элементов этого массива:

[2, 1, 4, 3, 6, 5] */

const arr = [1, 2, 3, 4, 5, 6];
const array = arr.map((item, index) =>{
    if(index % 2 === 0){
        return item + 1;
    }else{
        return item - 1;
    }
});
console.log(array);