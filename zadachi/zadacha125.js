// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let num1 = 123;
let num2 = 142;
let str1 = num1.toString();
let str2 = num2.toString();

if(str1.at(0) === str2.at(0)){
    console.log(`Совпадвют`);
}else{
    console.log(`Несовпадают`);
}