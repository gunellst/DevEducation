// 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.

// let A=prompt("Enter the number:");
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




// 2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).

// let A=+prompt("Enter the number:");
// if(A==0){
//     alert("number will not 0");
// }
// else
//     for(let i=1; i<A; i++) {
//         if(Math.pow(i,2)<A) {
//             console.log(i);
//         }
//     }




// 3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// let A=+prompt("Enter the number:");
// let divisor=0;
// for(let i=1; i<=A/2; i++) {
//     if (A%i==0) {
//         divisor=i;
//     }
// }
// console.log(divisor);



// 4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).
let A=+prompt("Enter the number for A");
let B=+prompt("Enter the number for B");
let sum=0;
let C;
if(A>B) {
    C=A;
    A=B;
    B=C;
}
for(i=A; i<=B; i++){
    if(i%7==0) {
        sum=sum+i;
    }
}
console.log(sum);




// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.
// let Nthnumber=+prompt("Enter the number:");
// let n1=0, n2=1, nextTerm;
// nextTerm=n1+n2;
// let Fibonacci;

// while(nextTerm <= Nthnumber) {
//     nextTerm=n1+n2;
//     n1=n2;
//     n2=nextTerm;
    
// }
// console.log(`Fibonacci &{Nthnumber}th=`,nextTerm);




// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).




// 7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.




// 8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".

const nthNumber = +prompt('Enter the number: ');
let n1 = 0, n2 = 1, nextTerm;
nextTerm = n1 + n2;
let Febunicci;
while (nextTerm <= nthNumber) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
console.log(`Febunicci ${nthNumber}th=`,nextTerm);