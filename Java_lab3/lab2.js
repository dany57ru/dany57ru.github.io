/**
 * Возвращает x, возведённое в n-ную степень.
 *
 * @param {number} x Возводимое в степень число.
 * @param {number} n Степень, должна быть натуральным числом.
 * @return {number} x, возведённое в n-ную степень.
 */
function pow(x, n) {
  return x ** n;
}




/**
 * Возвращает сумму чисел от 1 до n включительно.
 *
 * @param {number} n Вводимое число.
 * @return {number} sum, сумма от 1 до n.
 */
function sumTo(n) {
  let i = 0;
  let sum = 0;
  while (i <= n) {
    sum = n * (n + 1) / 2;
    i++;
  }
  return sum;
}




/**
* Возвращает  факториал числа n!, используя рекурсивный вызов n!= n*(n-1)!.
*
* @param {number} n Вводимое число.
* @return {number} res, значение должно иметь тип BigInt.
*/
function factorial(n) {
  let res = 0n;
  if (n == 0n || n == 1n) {
    return 1n;
  } else {
    res = BigInt(n) * BigInt(factorial(n - 1));
    return res;
  }

}




/**
* Возвращает n-е число Фибоначчи.
*
* @param {number} n Вводимое число.
* @return {number} sum, n-е число Фибоначчи.
*/
export function fib(n) {
  let a = 1n;
  let b = 1n;
  if (n == 0n) {
    return 0n;
  } else {
    for (let i = 3n; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

}




/**
 * Принимает целочисленное значение x и возвращает анонимную функцию
 *
 * @param {number} x целочисленное значение.
 * @return {boolean} у, возвращает анонимную функцию.
 */
function compare(x) {
  return function (y) {
    if (y > x) {
      return true;
    } else if (y < x) {
      return false;
    } else if (y == x) {
      return null;
    }
  }
}




/**
 * Возвращает сумму всех своих аргументов.
 *
 * @param {number} () принимаемые значения.
 * @return {number} result, сумму всех своих аргументов.
 */
function sum() {
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}
