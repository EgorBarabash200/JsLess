/* Дано некоторое число:

1357
Проверьте, что все цифры этого числа являются нечетными. */
const num = 1357;
const str = String(num);
for(let i = 0; i < str.length; i++){
    if(str[i] % 2 !== 0){
        console.log(`${str[i]} - нечётный элемент`);
    }else{
        console.log(`${str[i]} - чётный элемент`);
    }
}