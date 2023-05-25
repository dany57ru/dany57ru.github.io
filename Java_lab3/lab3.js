
export function getDecimal(num) {
    if (Math.trunc(num) == num) return 0;
    else if (num < 0) return num - (-Math.ceil(-num));
    if (num > 1) return +(num - Math.trunc(num)).toFixed(2);
}


export function ucFirst(str) {
    if (!str) return str;
    else {
        let NewStr = str[0].toUpperCase() + str.slice(1);
        return NewStr;
    }
}


export function checkSpam(str) {
    let NewStr = str.toLowerCase(); //перевод к нижнему регистру
    return NewStr.includes('viagra') || NewStr.includes('xxx');
}


export function truncate(str, maxlength) {
    if (str.length < maxlength) return str;
    else return str.slice(0, maxlength - 1) + '…';
}


export function camelize(str) {
    let STR = str.split("-");
    let StrNew = "";
    for (let i = 0; i <= STR.length - 1; i++) {
        if (i == 0) StrNew = STR[0];
        else StrNew += ucFirst(STR[i]);
    }
    return StrNew;
}

import function fibs(n) {
    let arr = [];
    for (let i = 0; i < n; i++) arr.push(fib(i));
    return arr;
}


export function arrReverseSorted(arr) {
    return arr.sort(function (a, b) {
        return b - a;
    });
}

export function unique(arr) {
    let set = new Set();
    for (let i in arr) set.add(arr[i]);
    return Array.from(set);
}