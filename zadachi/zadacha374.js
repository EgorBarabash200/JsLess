// Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

const num = 4;
let delitel = 0;
for(let i = 2; i < num; i++){
    if(num % i === 0) delitel++;
}

if(delitel === 1){
    console.log(`У числа ${num} один делитель`);
}else if(delitel === 0 || delitel > 1){
    console.log(`У числа ${num} нет делителей или их несколько делителей`);
}