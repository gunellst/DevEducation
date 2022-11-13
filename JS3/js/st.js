// Let's say you have an array of arbitrary size filled with random numbers (one array per task). You need to:

// 1. Find the minimum element of this array.
// let arr = [5,12,4,6,15];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < min ) {
//         min = arr[i];
//     }
// }
// console.log(min);

// (another way)
// const a = [5,12,4,6,16];
// console.log(Math.min(...a));




// 2. Find the maximum element of this array.
// let arr = [5,12,4,6,15];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++){ 
//     if (arr[i] > max ) {
//         max = arr[i];
//     }
// }
// console.log(max);

// (another way)
// const a = [5,12,4,6,16];
// console.log(Math.max(...a));




// 3. Find the index of the minimum element of this array.
// let arr = [5,12,4,6,15];
// let min =arr[0];
// let index = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < min ) {
//         min = arr[i];
//         index = i;    
//     }
// }
// console.log(index);

// (another way)
// const a = [5,12,4,6,16];
// console.log(a.indexOf(Math.min(...a)));




// 4. Find the index of the maximum element of this array.
// let arr = [5,12,4,6,15];
// let max =arr[0];
// let index = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > max ) {
//         max = arr[i];
//         index = i;    
//     }
// }
// console.log(index);

// (another way)
// const a = [5,12,4,6,16];
// console.log(a.indexOf(Math.min(...a)));




// 5. Calculate the sum of array's elements with odd indices.
// let arr = [5,12,4,6,15];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 != 0) {
//     sum = sum + arr[i];
//    }
// }
// console.log(sum);




// 6. Reverse this array (array in reverse direction) - you have to create YOUR OWN function, which WILL NOT create any new array.
// let reverse = (a) =>{
//     return a.reverse();
// }
// console.log(reverse(a));




// 7. Count the number of odd elements in the array.
// let arr = [5,12,4,6,15,];
// let count=0;
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] % 2 !=0 ) {
//    count = count + 1
//    }
// }
// console.log(count);




// 9. Sort the array in ascending order in one of the following ways: bubble sort, selection sort or insertion sort.
// (WITH SELECTION)
// let arr = [5,12,4,6,15];
// for (i=0; i<arr.length; i++){
//     for(j=i; j<arr.length; j++) {
//         if(arr[i]>arr[j]) {
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr);




// 10. Sort the array in descending order in one of the ways (different from the method taken in the 9th task): bubble sort, selection sort or insertion sort.
// (Bubble sort)
// let arr = [5,12,4,6,15];
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] < arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }
// }
// console.log(arr);






