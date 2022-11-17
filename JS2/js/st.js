// 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
// 2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
// 3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// 4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
// 7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
// 8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".


// // 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
// let A=+prompt("Enter the number:");
// if(A===0) {
//     alert('Dividing by zero is undefined');
// }
// else{
//     for(let i=1; i<=1000; i++) {
//         if (i%A==0){
//             console.log(i);
//         }
//     }
// }


// (1. with function)
// let A=+prompt("Enter the number:");
// let someDivideMath = (A) =>{
//     if(A===0) {
//         alert('Dividing by zero is undefined');
//     }
//     else{
//         for(let i=1; i<=1000; i++) {
//             if (i%A==0){
//                 console.log(i);
//             }
//         }
//     }
// }
// someDivideMath(A);








// 2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
// let A=+prompt("Enter the number:");
// if(A==0){
//     alert("number will not 0");
// }
// else {
//     for(let i=1; i<A; i++) {
//         if(Math.pow(i,2)<A) {
//             console.log(i);
//         }
//     }
// }


// (2. with function)
// let A=+prompt("Enter the number:");
// let somePowMath = (A) => {
//     if(A==0){
//         alert("number will not 0");
//     }
//     else {
//         for(let i=1; i<A; i++) {
//             if(Math.pow(i,2)<A) {
//                 console.log(i);
//             }
//         }
//     }
// }
// somePowMath(A);








// 3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// let A=+prompt("Enter the number:");
// let divisor=0;
// for(let i=1; i<=A/2; i++) {
//     if (A%i==0) {
//         divisor=i;
//     }
// }
// console.log(divisor);


// (3. with function)
// let A=+prompt("Enter the number:");
// let largestDivisor = (A) => {
//     let divisor=0;
//     for(let i=1; i<=A/2; i++) {
//         if (A%i==0) {
//             divisor=i;
//         }
//     }
// return divisor;
// }
// console.log(largestDivisor(A));








// 4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
// let A=+prompt("Enter the number for A");
// let B=+prompt("Enter the number for B");
// let sum=0;
// let C;
// if(A>B) {
//     C=A;
//     A=B;
//     B=C;
// }
// for(i=A; i<=B; i++){
//     if(i%7==0) {
//         sum=sum+i;
//     }
// }
// console.log(sum);


// (4. with function)
// let A=+prompt("Enter the number for A");
// let B=+prompt("Enter the number for B");
// let divisorOfSeven = (A,B) =>{
//     let sum=0;
//     let C;
//     if(A>B) {
//         C=A;
//         A=B;
//         B=C;
//     }
//     for(i=A; i<=B; i++){
//         if(i%7==0) {
//             sum=sum+i;
//         }
//     }
// return sum;
// }
// console.log(divisorOfSeven(A,B));








// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
// let N=+prompt("Enter the number:");
// while (isNaN(N) || N==""){  
//     N=+prompt("Value must be a number.Please try again.:");  
// }  
// let num1=1;  
// let num2=1;  
// let result;  
// let count=2;  
// if(N==2 || N==1){  
//     result=1;  
//     console.log(result);  
  
// }  
// for (let i = 0; i < N; i++) {  
//     result=num1+num2;  
//     num1=num2;  
//     num2=result;  
//     count++;  
//     if (count==N) {  
//     console.log(`The ${N}th Fibonacci number is ${result}`);          
//     }        
// }


// (5. with function)
// let N=+prompt("Enter the number:");
// let mathOfFebunicci = (N) =>{
//     while (isNaN(N) || N==""){  
//         N=+prompt("Value must be a number.Please try again.:");  
//     }  
//     let num1=1;  
//     let num2=1;  
//     let result;  
//     let count=2;  
//     if(N==2 || N==1){  
//         result=1;  
//         console.log(result);  
//     }  
//     for (let i = 0; i < N; i++) {  
//         result=num1+num2;  
//         num1=num2;  
//         num2=result;  
//         count++;  
//         if (count==N) {  
//         console.log(`The ${N}th Fibonacci number is ${result}`);          
//         }        
//     }
// }
// console.log(mathOfFebunicci(N));








// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
// (6. with function)
// const A = +prompt('Please give a number for A');
// const B = +prompt('Please give a number for B');
// const findGCD = (A, B) => {
// let a = Math.abs(A);
// let b = Math.abs(B);
// while (a && b && a !== b) {
//     if(a > b){
//         [a, b] = [a - b, b];
//     }else{
//         [a, b] = [a, b - a];
//     };
// };
// return a || b;
// };
// console.log(findGCD(A, B));








// 7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
// let num = +prompt("Enter the number: ");
// let reverse = 0; 
// let reminder = 0; 
// while (num>0) {  
//     reminder = num % 10;   
//     reverse = reverse*10 + reminder;  
//     num = ((num-reminder)/10);  
// } 
// console.log(reverse);


// (7. with function)
// let num = +prompt("Enter the number: ");
// let reverseNumbers = (A) => {
//     let reverse = 0; 
//     let reminder = 0; 
//     while (num>0) {  
//         reminder = num % 10;   
//         reverse = reverse*10 + reminder;  
//         num = ((num-reminder)/10);  
//     } 
//     return reverse;
// }
// console.log(reverseNumbers(num));








// 8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".
// let A=+prompt("Enter the first number:");  
// while (isNaN(A)){  
//     A=+prompt("Value must be a number.Please try again.:");  
//    }  
// let B=+prompt("Enter the second number:");  
// while (isNaN(B)){  
//     B=+prompt("Value must be a number.Please try again.:");  
//    }  
//    let digit=0;  
// while (A>0) {  
//     digit=A%10;  
//     if (B.toString().includes(digit.toString())) {  
//         console.log('YES');  
//         break;  
//     }  
//     A=(A-digit)/10;  
// }  
// if (A<=0 && !B.toString().includes(digit.toString())) {  
//     console.log('NO');     
// }
