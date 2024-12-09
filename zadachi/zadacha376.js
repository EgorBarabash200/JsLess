// Дан массив с числами. После каждого однозначного числа вставьте еще такое же.

const arr = [1, 46, 456, 6, 72, 9];
let res = 0;
const array = arr.map((item) =>{
    if(String(item) < 1){
        return [item, item];
    }
    
});
console.log(arr);