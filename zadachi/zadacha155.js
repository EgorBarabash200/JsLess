// Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.

let str = "hello world";

for(let i = str.length - 1 ; i >= 0; i--){
    console.log(str[i]);
}