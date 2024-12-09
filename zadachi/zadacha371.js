// Дана строка со словами. Отсортируйте слова в алфавитном порядке.

const str = 'абрака кадабра вильтри';
const arr = str.split(' ');
console.log(arr.sort((a, b) => a.localeCompare(b)));