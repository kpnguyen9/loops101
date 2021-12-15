// const aString = "Hello Texas";
// const anotherString = `can have ${aString}`;
// const aNum = 42;

// //Arrays list things

// let anArray = [1, "two", 3, "four", "cinco"];
// let num = [2, 3, 4, 5];
// let sum = 0;

// //For loops

// // for (let i = 0; i < anArray.length; i++) {
// // console.log(anArray[i]);
// // }

// for (let i = num.length - 1; i >= 0; i--) {
//   sum += num[i];
// }

// //while loop
// let counter = 0;

// while (counter < 10) {
//   console.log("The counter is", counter);
//   counter++;
// }

//array methods

let newArray = [];

newArray.push("Luna");
newArray.push("Ramen");
newArray.unshift("Momo");

let nums2 = [];

for (let k = 0; k < 10; k++) {
  nums2.push(k);
}

let slicedArray = nums2.slice(3, 6);

console.log(nums2);
console.log(slicedArray);
