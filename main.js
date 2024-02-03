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
