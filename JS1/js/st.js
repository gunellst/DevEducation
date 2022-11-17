// 1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division.
// 2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
// 3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.
// 4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
// 5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
// 6. The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
// 7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)


// 1. User gives 2 numbers (A and B). Print to the console the result of dividing A by B and the remainder of the division. 
 
// let A=+prompt("enter A number:"); 
// let B=+prompt("enter B number:"); 
 
// if(B==0) { 
//     alert('Dividing by zero is undefined') 
// } 
// else { 
//     let result=A/B; 
//     let remainder=A%B; 
//     console.log('result='+" "+ result); 
//     console.log('remainder='+" "+ remainder); 
// }


// (1. with function)
// let A=+prompt("enter A number:"); 
// let B=+prompt("enter B number:"); 
// let divideAndRemainder = (A,B) =>{
//     if(B==0) { 
//     alert('Dividing by zero is undefined') 
// } 
// else { 
//     let result=A/B; 
//     let remainder=A%B; 
//     console.log('result='+" "+ result); 
//     console.log('remainder='+" "+ remainder); 
// }
// }
// divideAndRemainder(A,B);



// 2. The user enters 2 values (A and B). Swap the contents of variables A and B (that means the value of variable B must be assigned to variable A, and vice versa).
// let A=+prompt("enter A number:");
// let B=+prompt("enter B number:");
// let C;
// C=A;
// A=B;
// B=C;
// console.log('A=',A);
// console.log('B=',B);


// (2. with function)
// let A=+prompt("enter A number:");
// let B=+prompt("enter B number:");
// let changeNumbers = (A,B) =>{
//     let C;
//     C=A;
//     A=B;
//     B=C;
//     console.log('A=',A);
//     console.log('B=',B);
// }
// changeNumbers(A,B);





// 3. The user enters 3 non-zero numbers (A, B and C). Print to the console the solution (the value of X) of the standard linear equation, where A*X+B=C.
// let A=+prompt("enter A number:");
// let B=+prompt("enter B number:");
// let C=+prompt("enter C number:");
// if(A===0||B===0||C===0){
//     alert('You cant write zero');
// } else{
//     let X = (C-B)/A;
//     console.log(X);
// }


// (3. with function)
// let A=+prompt("enter A number:");
// let B=+prompt("enter B number:");
// let C=+prompt("enter C number:");
// let someEq = (A,B,C) => {
//     if(A===0||B===0||C===0){
//     alert('You cant write zero');
// } else{
//     let X = (C-B)/A;
//     console.log(X);
//     }
// }
// someEq(A,B,C);




// 4. User gives 2 numbers (A and B). If A>B then print to the console the result of A+B, if A=B then the result of A*B, if A<B then A-B.
// let A=+prompt("enter A number:");
// let B=+prompt("enter B number:");
// if(A>B){
//     console.log(A+B);
// }
// else if(A===B){
//     console.log(A*B);
// }
// else {
//     console.log(A-B);
// }

// (4. with function)
// let A=+prompt("enter A number:");
// let B=+prompt("enter B number:");
// let someOtherEq = (A,B) =>{
//     if(A>B){
//         console.log(A+B);
//     }
//     else if(A===B){
//         console.log(A*B);
//     }
//     else {
//         console.log(A-B);
//     }
// }
// someOtherEq(A,B);




// 5. User gives 3 numbers (a, b, c). Find out and print to the console the solution of quadratic equation ax^2+bx+c=0.
// let a=+prompt("enter a number:");
// let b=+prompt("enter b number:");
// let c=+prompt("enter c number:");
// let D=(b*b)-(4*a*c);
// if (D>0) {
//     x1=(-b+Math.sqrt(D))/(2*a);
//     x2=(-b-Math.sqrt(D))/(2*a);
//     console.log('x1='+x1);
//     console.log('x2='+x2);
// }
// else if(D===0) {
//     x1=x2=-b/(2*a);
//     console.log('x1=x2='+x1);
// }
// else {
//     console.log("Quadratic equation have not solution");
// }


// (5. with function)
// let a=+prompt("enter a number:");
// let b=+prompt("enter b number:");
// let c=+prompt("enter c number:");
// let findingRoots = (A,B,C) =>{
//     let D=(b*b)-(4*a*c);
//     if (D>0) {
//         x1=(-b+Math.sqrt(D))/(2*a);
//         x2=(-b-Math.sqrt(D))/(2*a);
//         console.log('x1='+x1);
//         console.log('x2='+x2);
//     }
//     else if(D===0) {
//         x1=x2=-b/(2*a);
//         console.log('x1=x2='+x1);
//     }
//     else {
//         console.log("Quadratic equation have not solution");
//     }
// }
// findingRoots(A,B,C);



// 6.The user enters a two-digit number. Print the literal representation of this number to the console. For example, typing "25" will display "twenty five" in the console, and "13" will display "thirteen".
// (WE DID THIS TASK WITH YOU AT LESSON)

// let num=+prompt("enter two-digit number")

// if(num%10==0 && num-(num%10)==10) {
//     console.log("ten");
// }
// else if(num%10==1 && num-(num%10)==10) {
//     console.log("eleven");
// }
// else if(num%10==2 && num-(num%10)==10) {
//     console.log("twelve");
// }
// else if(num%10==3 && num-(num%10)==10) {
//     console.log("thirteen");
// }
// else if(num%10==4 && num-(num%10)==10) {
//     console.log("fourteen");
// }
// else if(num%10==5 && num-(num%10)==10) {
//     console.log("fifteen");
// }
// else if(num%10==6 && num-(num%10)==10) {
//     console.log("sixteen");
// }
// else if(num%10==7 && num-(num%10)==10) {
//     console.log("seventeen");
// }
// else if(num%10==8 && num-(num%10)==10) {
//     console.log("eighteen");
// }
// else if(num%10==9 && num-(num%10)==10) {
//     console.log("nineteen");
// }
// else if(num%20==0 && num-(num%20)==20) {
//     console.log("twenty");
// }
// else if(num%30==0 && num-(num%30)==30) {
//     console.log("thirty");
// }
// else if(num%40==0 && num-(num%40)==40) {
//     console.log("forty");
// }
// else if(num%50==0 && num-(num%50)==50) {
//     console.log("fifty");
// }
// else if(num%60==0 && num-(num%60)==60) {
//     console.log("sixty");
// }
// else if(num%70==0 && num-(num%70)==70) {
//     console.log("seventy");
// }
// else if(num%80==0 && num-(num%80)==80) {
//     console.log("eighty");
// }
// else if(num%90==0 && num-(num%90)==90) {
//     console.log("ninety");
// }
// else if(num%90==9 && num-(num%90)==90) {
//     console.log("ninety-nine");
// }




// 7. User gives 3 numbers (x, y, r). Find out if point with location (x,y) is inside a circle with radius r? (the center of the circle is at the origin)
// let x=+prompt("enter x number:");
// let y=+prompt("enter y number:");
// let z=+prompt("enter z number:");
// let radius=r*r;
// let formula= Math.sqrt((x*x)+(y*y));
// if(radius===formula){
//     console.log("(x,y) is inside a circle");
// }
// else {
//     console.log("(x,y) is not inside a circle");
// }


// // (7. with function)
// let x=+prompt("enter x number:");
// let y=+prompt("enter y number:");
// let z=+prompt("enter z number:");
// let checkingRadiusAndFormula = (x,y,r) =>{
//     let radius=r*r;
//     let formula= Math.sqrt((x*x)+(y*y));
//     if(radius===formula){
//         console.log("(x,y) is inside a circle");
//     }
//     else {
//         console.log("(x,y) is not inside a circle");
//     }
// }
// checkingRadiusAndFormula(x,y,r);
