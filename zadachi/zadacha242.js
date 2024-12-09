// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

const user = {
    name: 'Egor',
    age: 19,
    isAdmin: false
};
console.log(Object.keys(user));
console.log(Object.values(user));
/*
arrKey = [];
arrUse = [];
for(let key in user){
    arrKey.push(key);
    arrUse.push(user[key]);
}
console.log(`Ключи:${arrKey} , Значения:${arrUse}`); */