// Заполните массив случайными числами из промежутка от 1 до 100 (10).

const arr = [];
 const randNum = String(Math.random());
 for(i = 0; i < randNum.length; i++){
    const num = Number(randNum[i]);
    if(isFinite(num) === true){
        arr.push(num);
    }
 }
 console.log(arr);

