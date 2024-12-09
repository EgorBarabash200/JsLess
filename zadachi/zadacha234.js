/* Дана дата в следующем формате:

'2025-12-31'
Преобразуйте эту дату в следующий объект:

{
	year: '2025',
	month: '12',
	day: '31',
} */ 

const date = '2025-12-31';
const arr = date.split('-');
const dateObj = {
	day: arr[2]
}
dateObj.year =arr[0];
dateObj['month'] = arr[1]; 
console.log(dateObj);
