// Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.

const str = 'asDgnMdcxM';
let zag = 0;
for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()) zag += 1;
}
if(zag > 2){
    console.log(`Заглавных букв больше чем 2, а именоо их ${zag}`);
 }else{
     console.log(`Заглавных букв ${zag}`);
 }