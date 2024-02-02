// function hello(name){
//     console.log('Hello  ' + name + '?');
// }
// hello('John');
// hello('Umar');
// hello('Ali');

// function perimetr(a, b) {
//     let p = 2 * ( a + b );
//     console.log(p);
// }
// perimetr(4, 6); 

// function add(a, b){
//     let c = a + b;
//     return c;
// }
// let result = add(3, 7)
// console.log(result);

//  function compare( a, b ) {
//     if (a > b){
//         return 1;
//     }
//     else if (a < b){
//         return -1;
//     }else {
//         return 0;
//     }
//  }
//  console.log(compare(8, 8));


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

// function sortABC(a, b, c){
//     console.log( a > b && c > b || a < b && a < c || c < a && c < b );
//     console.log( a < b && c > b || a > b && b > c || c > a && c < b );
//     console.log( a < b && c < b || a > b && a > c || c > a && c > b );
// } 
// sortABC(2, 4, 1);
