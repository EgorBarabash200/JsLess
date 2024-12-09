// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.

const str = 'advfvg ksedww adfggf udads';
const arr = str.split(' ');
const array = arr.filter((item) =>{
    if(item.startsWith('a')){
        return item;
    }
});
console.log(array);
