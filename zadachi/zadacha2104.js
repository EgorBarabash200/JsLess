/* Дан массив с числами:

[1, 2, 3, 3, 4, 5]
Проверьте, что в этом массиве есть два одинаковых элемента подряд. */

const arr = [1, 2, 3, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i + 1]){
        console.log(`В массиве есть 2 одинаковых элемента: ${arr[i]} = ${arr[i + 1]}`)
    }
}