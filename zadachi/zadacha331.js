// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

const arr = ['sfg', 'fdvssfv', 'dsaccg', 's', 'aa', 'hsavf'];
const array = arr.filter((item)=>{
    if(item.length <= 3){
        return item;
    }
});
console.log(array);