// Дано некоторое число: 12345 Выведите в консоль все его символы с конца.

let num = 12345;

let strnum = num.toString();

let newnum = null;

for( let i = strnum.length -1; i >= 0 ; i--){
    newnum = Number(strnum[i]);
    console.log(newnum);
}