/* ' *Дана некоторая строка:

'a bc def ghij'
Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:

'A BC DEF ghij'*/
 const str = 'a bc def ghij';
 const arr = str.split(' ');
 const arrStr = arr.map((item) =>{
    if(item.length <= 3){
        return item.toUpperCase();
    }else{
        return item.toLowerCase();
    }
 });
 console.log(arrStr.join(' '));