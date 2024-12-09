/* Дан некоторый массив, например, вот такой:

[1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:

[1, 2]
[3, 4]
[5, 6] */

 function SizeArr(arr , size){
    return arr.slice(0, size).forEach(() => {
        console.log(arr.slice(0, size));
    })
}

let origArr = [1, 2, 3, 4, 5, 6];

SizeArr(origArr, 2); 
