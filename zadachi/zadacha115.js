// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

const str1 = "Абра";
const str2 = "Акабра";

if(str1.at(0) === str2.at(0)){
    console.log("Совпадают");
}else{
    console.log("Несовпадают");
}