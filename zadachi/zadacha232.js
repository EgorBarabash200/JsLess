// Дана некоторая строка. Найдите позицию третьего нуля в строке.

const str = 'всем0привет0как0увасдела0'

let index = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] === '0') {
      index++;
      if (index === 3) {
        console.log(i);
      }
    }
  }