// Array is a linear collection of things.

// let student1 = "asmita";
// let student2 = "subash";
// let student3 = "prakriti";

let students = ["asmita", "subash", "prakriti"];

// visualization of array
// 2    4   6   8 
// 0    1   2   3
// -4  -3  -2  -1

let nums = [2,4,6,8];
console.log(nums[0]);   //2
console.log(typeof nums);   //object

// Mixed array 
let info = ["asmita", 13, 5.5];
let newArr = [];

console.log(info.length);   //3
console.log(newArr.length);     //0

console.log(info[0][0]);    //a
console.log(info[0].length);    //6


// Arrays are Mutable i.e changeable
let fruits = ["mango", "apple", "pineapple"];
fruits[0] = "strawberry";
console.log(fruits);

fruits[6] = "pomegranet";
console.log(fruits);

console.log(fruits.length);     //7


// Array Methods

let cars = ["audi", "bmw", "xuv", "maruti"];

// push method  : add to end
cars.push("toyota");
cars.push("ferrari");
console.log(cars);

// pop method   : add to end
cars.pop();
cars.pop();
console.log(cars);

// unshift method  : add to start
cars.unshift("toyota");
cars.unshift("ferrari");
console.log(cars);

//shift method : delete from start & returns it.
let removedItem = cars.shift();
console.log(cars, "removed item is :", removedItem);


let followers = ['a','b','c'];
let blocked = followers.shift();    //a


// Practice Qs

let months = ["january", "july", "march", "august"];
console.log(months);

months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);       //['july', 'june','march','august']


// Array Methods

// indexOf( var ) :   returns index of var
let primary = ["red", "yellow", "blue"];

console.log(primary.indexOf("red"));    //0
console.log(primary.indexOf("pink"));   //-1

// includes( value ) :     search for a value
console.log(primary.includes("red"));   //true
console.log(primary.includes("pink"));  //false

// concate( arr2 ) :    merge 2 arrays
let secondary = ["orange", "green", "violet"];

let allColors = primary.concat(secondary);
console.log(primary);
console.log(allColors);     //primary[] + secondary[] 

// reverse() :    reverse any array, actual changes happen in original array.
console.log(primary.reverse());
console.log(primary);

// slice() : copies a portion of an array
// does not change the original array
let colors = ["red","yellow","blue","orange","pink","white"];

console.log(colors.slice());     //copy original array
console.log(colors.slice(2));    //["blue","orange","pink","white"]
console.log(colors.slice(2,3));  //["blue"]
console.log(colors.slice(-2));   //["pink","white"]
console.log(colors.slice(10));   //empty array


// splice() :   removes/replaces/add elements in place
// splice(start, delCount, itemsToAdd)
// changes the original array

console.log(colors.splice(4));      //["pink","white"]

console.log(colors.splice(0,1));        //red
console.log(colors);        //["yellow","blue","orange"]

console.log(colors.splice(0,1,"red","grey"));   //yellow
console.log(colors);        //["red","grey","blue","orange"]

console.log(colors.splice(0,0,"green"));    //[ ]
console.log(colors);        //['green','red','grey','blue','orange']


// sort
// arrange in increasing or decreasing order. num -> string & sort.
console.log(colors.sort());

let char = ['b','d','e','a'];
console.log(char.sort());

let num = [99, 84, 50, 80,100];
console.log(num.sort());       //100, 50, 80, 84, 99


// Practice Qn

let month = ["january","july","march","august"];

// month.splice(0,1);
// month.splice(1,0,"june");

month.splice(0,2,"july","june");
console.log(month);

let subs = ["c","c++","html","javascript","python","java","c#","sql"];
// subs.reverse();
// console.log(subs.indexOf("javascript"));        //4

console.log(subs.reverse().indexOf("javascript"));

