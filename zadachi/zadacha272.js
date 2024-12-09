// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
const symbol = 'S';

if(symbol === symbol.toUpperCase()){
    console.log('В верхнем регистре');
}else{
    console.log('В нижнем регистре');
}