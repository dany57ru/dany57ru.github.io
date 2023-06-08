import {fib} from './lab2.js';

/**
* Возвращает дробную часть числа num.
*
* @param {number} num число, от которого нужно найти дробную часть.
* @return {number} дробная часть числа.
*/
export function getDecimal(num) {
   if (Math.trunc(num) == num) return 0;
   else if (num < 0) return num - (-Math.ceil(-num));
   if (num > 1) return +(num - Math.trunc(num)).toFixed(2);
}


/**
* Возвращает строку str с заглавным первым символом.
*
* @param {string} str строка, которую нужно преобразовать.
* @return {string} str с заглавным первым символом.
*/
export function ucFirst(str) {
   if (!str) return str;
   else {
       let NewStr = str[0].toUpperCase() + str.slice(1);
       return NewStr;
   }
}


/**
* Возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false.
*
* @param {string} str проверяемая строка.
* @return {boolean} true, если строка str содержит 'viagra' или 'XXX', а иначе false.
*/
export function checkSpam(str) {
   let newStr = str.toLowerCase(); //перевод к нижнему регистру
   return newStr.includes('viagra') || newStr.includes('xxx');
}


/**
* Проверяет длину строки str.
* если она превосходит maxlength – заменяет 
* конец str на символ многоточие "…"
* 
* @param {string} str Проверяемая строка.
* @param {number} maxlength максимальная длина строки.
* @return {string} str, усеченная строка.
*/
export function truncate(str, maxlength) {
   if (str.length < maxlength) return str;
   else return str.slice(0, maxlength - 1) + '…';
}


/**
* Дефисы в строке удаляются, а все слова 
* после них получают заглавную букву.
* 
* @param {string} str Проверяемая строка.
* @return {string} StrNew, преобразованная строка.
*/
export function camelize(str) {
   let stroka = str.split("-");
   let strNew = "";
   for (let i = 0; i <= stroka.length - 1; i++) {
       if (i == 0) strNew = stroka[0];
       else strNew += ucFirst(stroka[i]);
   }
   return strNew;
}

/**
* Возвращает массив, заполненный числами 
* Фибоначчи до n-го числа (не включая его).
* 
* @param {number} n натуральноее число, количество чисел Фибоначчи.
* @return {Array} arr, массив с числами Фибоначчи.
*/
export function fibs(n) {
   let arr = [];
   for (let i = 0; i < n; i++) arr.push(fib(i));
   return arr;
}

/**
* Возвращает массив из элементов, отсортированный по убыванию.
*
* @param {Array} arr массив элементов.
* @return {Array} arr, массив, отсортированный по убыванию.
*/
export function arrReverseSorted(arr) { 
   let arr_copy = arr.slice(); 
   return arr_copy.sort(function (a, b) { 
       return b - a; 
   }) 
}

/**
* Возвращает массив уникальных, не повторяющихся значений.
*
* @param {Array} arr массив элементов.
* @return {Array} arr, массив с уникальными значениями.
*/
export function unique(arr) {
   let set = new Set();
   for (let i in arr) set.add(arr[i]);
   return Array.from(set);
}