/*Дан массив с некоторыми числами, например, вот такой:

[123, 456, 789]
Напишите код, который перевернет числа в этом массиве по следующему принципу:

[321, 654, 987]
 */

const arr = [123, 456, 789];
const newArr = arr.map((item) =>{
    const nItem = String(item).split('').reverse();
    return Number(nItem.join(''));
});
console.log(newArr)