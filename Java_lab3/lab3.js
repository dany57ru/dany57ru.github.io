/**
* Возвращает дробную часть числа num.
*
* @param {number} num Вводимое десятичное число.
* @return {number} sum, возвращает дробную часть числа.
*/
function getDecimal(num){
    let res = 0;
    if (num >= 0) {
       let cel = Math.trunc(num);
       res = num - cel;
       return Math.floor(res * 100) / 100; 
    } else {
       cel = Math.floor(num);
       return num - cel;
    }
 }
 /**
 * Возвращает строку str с заглавным первым символом..
 *
 * @param {string} str Вводимая строка.
 * @return {string} str, возвращает строку str с заглавным первым символом.
 */
 function ucFirst(str){
    if (!str) return str;
    else return str[0].toUpperCase() + str.slice(1);
 }
 /**
 * Возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false..
 *
 * @param {string} str Вводимая строка.
 * @param {string} strNew перевод строки в нижний регистр.
 * @param {string} strNew1 перевод строки в верхний регистр.
 * @return {string} strNew strNew1, возвращает true, если строка str содержит 'viagra' или 'XXX', а иначе false
 */
 function checkSpam(str){
    let strNew = str.toLowerCase();
    let strNew1 = str.toUpperCase();
   return strNew.includes("xxx") || strNew.includes("viagra") || strNew1.includes("XXX") || strNew1.includes("VIAGRA") ;
 }
 /**
 * проверяет длину строки str, и если она превосходит maxlength – заменяет конец str на символ многоточие "…", так чтобы ее длина стала равна maxlength.
 *
 * @param {string} str Вводимая строка.
 * @param {number} maxlength вводимая максимальная длина строки.
 * @param {string} strNew новая усеченная строка.
 * @return {string} strNew str, результатом функции должна быть (при необходимости) усечённая строка
 */
 function truncate(str, maxlength){
    if(str.length > maxlength){
       strNew = str.slice(0, maxlength-1) + '…';
       return strNew;
    } else return str;
 }
 /**
 * преобразуйте строку вида 'var-test-text' в 'varTestText'
 *
 * @param {string} str Вводимая строка.
 * @param {Array} strArr полученный список из строки, сформированный по разделителю "-".
 * @return {string} strNew, новая строка
 */
 function camelize(str){
    //let str = "fgcf-gjdt-cg";
    let strArr = str.split("-");
      for (let i = 0; i <= strArr.length - 1; i++){
       if (i == 0) {
          strNew = strArr[0];
       } else strNew += ucFirst(strArr[i]);
       
       } return strNew;   
       
 }  
 /**
 * принимает неупорядоченный массив чисел arr и возвращает массив, упорядоченный по убыванию
 *
 * @param {array} arr, неупорядоченный массив чисел
 * @return {array} arr, массив, упорядоченный по убыванию
 */
 
 function arrReverseSorted(arr) {
    /**
 *  упорядочение по убыванию
 *
 * @param {number} a, b, пары чисел, проверяемые между собой в массиве
 * @return {number} -1, 0, 1
 */
    function compareNumeric(a, b) {
       if (a > b) return -1;
       if (a == b) return 0;
       if (a < b) return 1;
     }
     arr.sort(compareNumeric);
     return arr;
 
    }
 /**
 *  возвращает массив уникальных, не повторяющихся значений массива arr
 *
 * @param {any} arr, значения в массиве могут быть любого типа
 * @param {array} arr, пустой массив
 * @return {array} arr , массив уникальных значений
 */
 function unique(arr) {
    return Array.from(new Set(arr));
 }
 
 