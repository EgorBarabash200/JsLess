// Дан массив. Удалите из него каждый пятый элемент.

const arr = [1, 34, 'ffs', 356, 44, 9, 'cedc', 7, 89, 'gbd',11  ];
const array = arr.filter((item, index) => {
   let num = index + 1;
    if( num % 5 !== 0){
        return item;
    }
    num++
});
console.log(array);