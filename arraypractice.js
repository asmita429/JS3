// Array References    

// "name" == "name";       //true -> values are same
// [1] == [1];         //false -> memory address is different

let arr = ['a','b','c'];
let arrCopy = arr;      //arrCopy & arr has same reference

console.log(arrCopy);
console.log(arr === arrCopy);   //true

arrCopy.push('d');
console.log(arr);

arrCopy.pop();
console.log(arr);   //arr & arrCopy are same.

let newArr = ['a','b','c'];
console.log(arr == newArr);     //false


// Constant Arrays   -> solves null array problem.
// assignment to constant variable is not possible in JS

const a = [1, 2, 3];       //arr is constant, elements are not constant
a.push(4);         //if we assign address 123 for array a, 
a.pop();           
console.log(a);

//a = [1, 2, 4];     //then we cannot change address of array a from 123 to 456.
                    //this throws error


// Nested Array / Multidimensional Array

let nums = [ [2, 4], [3, 6], [4, 8]];
// index   [    0       1       2   ]
// index     [0  1]  [0  1]  [0  1]

console.log(nums);  //[Array(2), Array(2), Array(2)]
console.log(nums.length);   //3
console.log(nums[0].length);    //2
console.log(nums[0][0]);    //2
console.log(nums[2][1]);    //8


// Practice Qs -> tic-tac-toe

let game = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
console.log(game);

game[0][1] = 'O';


// JS Practice Qs

let ns = [7, 9, 0, -2];
let n = 3
console.log(ns.slice(0, n));    //7, 9, 0

console.log(ns.slice(ns.length - n));      //9, 0, -2


let str = prompt("enter a string");
if (str.length == 0) {
    console.log("string is empty");
} else {
    console.log("string is not empty")
}


if (str[0] == str[0].toLowerCase()) {
    console.log("character :", str[0] ,"is lowercase.");
} else {
    console.log("a character is upper case");
}


let greet = "      hello World!     ";
console.log(`string without spaces = ${greet.trim()}`);


let fruits = ["apple", "banana", "coconut", "dragon-fruit"];
console.log(fruits.includes("mango"));      //false


let Arr = ["hello", 'a', 23, 64, -6];
let item = 13;

if (Arr.indexOf(item) != -1) {
    console.log(`${item} exists in array`);
} else {
    console.log(`${item} dose not exist in array`);
}
