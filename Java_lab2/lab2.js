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
* @return {BigInt} n!
*/
function factorial(n) {
    if (n == 0n || n == 1n) {
        return 1n;
    } else {
        return BigInt(n) * BigInt(factorial(n - 1));
    }

}




/**
* Возвращает n-е число Фибоначчи.
*
* @param {number} n Вводимое число.
* @return {BigInt} sum, n-е число Фибоначчи.
*/




function fib(n) {
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
 * @return {function} функция сравнния у с х, которая возвращает true, false or null
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
 * @return {...values: number[]} result, сумму всех своих аргументов.
 */
function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}
