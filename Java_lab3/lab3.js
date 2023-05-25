import {fib} from "./lab2.js";

export function getDecimal(num){
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

export function ucFirst(str){
   if (!str) return str;
   else return str[0].toUpperCase() + str.slice(1);
}

export function checkSpam(str){
   let strNew = str.toLowerCase();
   let strNew1 = str.toUpperCase();
  return strNew.includes("xxx") || strNew.includes("viagra") || strNew1.includes("XXX") || strNew1.includes("VIAGRA") ;
}

export function truncate(str, maxlength){
   if(str.length > maxlength){
      let strNew = str.slice(0, maxlength-1) + '…';
      return strNew;
   } else return str;
}

export function camelize(str){
   //let str = "fgcf-gjdt-cg";
   let strArr = str.split("-");
   let strNew = ""
     for (let i = 0; i <= strArr.length - 1; i++){
      if (i == 0) {
         strNew = strArr[0];
      } else strNew += ucFirst(strArr[i]);
      
      } return strNew;   
      
}  

export function fibs(n) {
   let arr = [];
   for (let i = 0; i < n; i++){
      arr.push(fib(i));
   } return (arr);  
}


export function arrReverseSorted(arr) {

   function compareNumeric(a, b) {
      if (a > b) return -1;
      if (a == b) return 0;
      if (a < b) return 1;
    }
    arr.sort(compareNumeric);
    return arr;

   }

export function unique(arr) {
   return Array.from(new Set(arr));
}

