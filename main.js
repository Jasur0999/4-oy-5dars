//  1- task ///////////////////////////////

// function power(a, n){
//     return (a ** n);
// }
//  console.log(power(3, 3));

//  2- task ///////////////////////////////

// function mean(a, b) {
//     let p = (a + b) / 2;
//     console.log(p);
//     let s = ( a + b ) ** ( 1 / 2 );
//     console.log(s);
// }
// mean(2, 8);

//  3- task ///////////////////////////////

// function sign(n) {
//     if ( n < 0 ){
//         return -1;
//     }
//     if ( n > 0 ){
//         return 1;
//     }
//     if ( n == 0 ){
//         return 0;
//     }
// }
// console.log(sign(-5));

//  4- task ///////////////////////////////

// function numberOfRoots(A, B, C) {
//     const D = B * B - 4 * A * C;
//     if (D > 0) {
//       return 2;
//     } else if (D === 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
  
//   console.log(numberOfRoots(1, -6, 9));

//  5- task ///////////////////////////////

// function areaCrcle(R, P){
//     let S = P * R ** 2;
//     return S;
// }
// console.log(areaCrcle(2, 3.14));

// //  6- task ///////////////////////////////

// function sumRange(a, b){
//     if (a < b){
//         let s = 0;
//         for(let i = 0; i <= b; i++){
//           s += i;
//         }
//         return s;
//     }
//     else if (a > b){
//         return 0;
//     }
// }
// console.log(sumRange(2, 1));

//  7- task ///////////////////////////////

// function calc(a, b, s) {
//     switch (s){
//         case '+':
//             console.log(a + b);
//             break;
//         case '-':
//             console.log(a - b);
//             break;
//         case '/':
//             console.log(a / b);
//             break;
//         case '*':
//             console.log(a * b);
//             break;
//         default:
//             return 0;
//     }
// }
// calc(3, 7, '+');

//  8- task ///////////////////////////////

// function isEven(k){
//         if ( k % 2 == 0 ){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(isEven(7));

//  9- task ///////////////////////////////

// function sortABC(a, b, c) {
//     console.log(Math.min(a, b, c));
//     if ( a > b && a < c || b > a && b < c || c > b && c < a ){
//         console.log(sortABC(a, b, c));
//     }
//     console.log(Math.max(a, b, c));

// }
// sortABC(3, 65, 98);


//  10- task  //////////////////////////////////

// function isPowerN(K, N) {
//     if (K <= 0) {
//       return false;
//     }
    
//     let result = K;
//     while (result % N === 0) {
//       result /= N;
//     }
    
//     return result === 1;
//   }
//   isPowerN(16);


//  11- task ///////////////////////////////


// function isPrimeAdvanced(n) {
//     let count = 0;
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//       console.log(i);
//       if (n % i == 0) {
//         console.log(i, "murakkab son");
//         return;
//       }
//     }
//     console.log("Tub son");
//   }
//   isPrimeAdvanced(9);
  

// function isPrime(n) {
//   let count = 0;
//   for (let i = 2; i <= n; i++) {
//     console.log(i)
//     if (n % i == 0)
//       // console.log(i, 'Tub son');
//       count++;
//     // } else {
//     //     console.log(i, 'murakkab son');
//     // }
//   }
//   if (count == 1) console.log("Tub son");
//   else {
//     console.log("Murakkab son");
//   }
// }

// isPrime(12000);


//  12- task  ///////////////////////////////

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num === 2) return true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   function numberOfPrime(N) {
//     let count = 0;
//     for (let i = 2; i <= N; i++) {
//       if (isPrime(i)) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   console.log(numberOfPrime(10));


//  13- task  ///////////////////////////////

// function digitNth1(num){
//     return num.toString().length;
//   }
  
//   function digitNth(K, N) {
//     if (digitNth1(K) < N) {
//       return -1;
//     }
//     let numStr = K.toString();
//     let digit = parseInt(numStr[numStr.length - N]);
//     return digit;
//   }
  
//   console.log(digitNth(105782, 5)); 
//   console.log(digitNth(1057, 5));

//  14- task  ///////////////////////////////


//  15- task  ///////////////////////////////

// function pNumber(number) {
//     let inverse = 0;
//     while (number > 0) {
//       inverse = (inverse * 10) + (number % 10);
//       number = Math.floor(number / 10);
//     }
//     return inverse;
//   }
  
//   function isPalindrom(N) {
//     if (N === pNumber(N)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(isPalindrom(1678761));

//  16- task  ///////////////////////////////

// function factorial(N) {
//     if (N < 0) return 1;
//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//       result *= i;
//     }
//     return result;
//   }
// factorial(result);

//  19- task  ///////////////////////////////

// function invertTime(H, M, S) {
//     return H * 3600 + M * 60 + S;
//   }
  
//   console.log(invertTime(0, 6, 40)); 
