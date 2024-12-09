// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

let arr = ["index.html", "style.css", "new.js", "main.html"];

let newarr = arr.filter(item => item.endsWith('.html'));

console.log(newarr);