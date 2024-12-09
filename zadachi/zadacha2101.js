// Дана строка с буквами и цифрами. Проверьте, что в этой строке не более трех букв.

const str = 'a4f5673j';
let bukv = 0;
/*const arr = str.split('');
arr.forEach((item)=>{
    if(isNaN(item)) bukv += 1;
    
});*/
for(let i = 0; i < str.length; i++){
    if(isNaN(Number(str[i])) === true) bukv += 1;
}
if(bukv > 3){
    console.log('Больше 3');
}else{
    console.log('Меньше или равно 3')
}
