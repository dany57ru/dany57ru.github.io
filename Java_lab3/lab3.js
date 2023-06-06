import { fib } from "./lab2.js";

export function getDecimal(num) {
   let res = 0;
   if (num >= 0) {
      let cel = Math.trunc(num);
      res = num - cel;
      return Math.floor(res * 100) / 100;
   } else {
      let cel = Math.floor(num);
      return num - cel;
   }
}

/**
 * Возвращает дробную часть числа num.
 *
 * @param {number} num число, от которого нужно найти дробную часть.
 * @return {number} дробная часть числа.
 */

export function ucFirst(str) {
   if (!str) return str;
   else return str[0].toUpperCase() + str.slice(1);
}

/**
 * Возвращает строку str с заглавным первым символом.
 *
 * @param {string} str строка, которую нужно преобразовать.
 * @return {string} str с заглавным первым символом.
 */

export function checkSpam(str) {
   let strNew = str.toLowerCase();
   let strNew1 = str.toUpperCase();
   return strNew.includes("xxx") || strNew.includes("viagra") || strNew1.includes("XXX") || strNew1.includes("VIAGRA");
}

/**
 * Возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false.
 *
 * @param {string} str проверяемая строка.
 * @return {boolean} true, если строка str содержит 'viagra' или 'XXX', а иначе false.
 */

export function truncate(str, maxlength) {
   if (str.length > maxlength) {
      let strNew = str.slice(0, maxlength - 1) + '…';
      return strNew;
   } else return str;
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

export function camelize(str) {
   //let str = "fgcf-gjdt-cg";
   let strArr = str.split("-");
   let strNew = ""
   for (let i = 0; i <= strArr.length - 1; i++) {
      if (i == 0) {
         strNew = strArr[0];
      } else strNew += ucFirst(strArr[i]);

   } return strNew;

}

/**
 * Дефисы в строке удаляются, а все слова 
 * после них получают заглавную букву.
 * 
 * @param {string} str Проверяемая строка.
 * @return {string} StrNew, преобразованная строка.
 */

export function fibs(n) {
   let arr = [];
   for (let i = 0; i < n; i++) {
      arr.push(fib(i));
   } return (arr);
}

/**
 * Возвращает массив, заполненный числами 
 * Фибоначчи до n-го числа (не включая его).
 * 
 * @param {number} n натуральноее число, количество чисел Фибоначчи.
 * @return {Array} arr, массив с числами Фибоначчи.
 */

export function arrReverseSorted(arr) {

   function compareNumeric(a, b) {
      if (a > b) return -1;
      if (a == b) return 0;
      if (a < b) return 1;
   }
   arr.sort(compareNumeric);
   return arr;

}

/**
* Возвращает массив из элементов, отсортированный по убыванию.
*
* @param {Array} arr массив элементов.
* @return {Array} arr, массив, отсортированный по убыванию.
*/

export function unique(arr) {
   return Array.from(new Set(arr));
}

/**
 * Возвращает массив уникальных, не повторяющихся значений.
 *
 * @param {Array} arr массив элементов.
 * @return {Array} arr, массив с уникальными значениями.
 */
