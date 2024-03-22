// String Methods

// str.trim() : Trims whitespaces from both ends of string & returns a new one.

let msg = "   Hello  ";
console.log(msg.trim());

// let password = prompt("set your password");
// let newPass = password.trim();
// console.log(newPass);


// str.toUpperCase()        "ASMITA"
// str.toLowerCase()        "asmita"

let str = "Apna College";
console.log(str.toLowerCase());
console.log(str.toUpperCase());


// String Methods with Arguments
// format: stringName.method( arg )

// indexOf : first index of occurrence
let string = "I love coding";

console.log(string.indexOf("love"));    // 2
console.log(string.indexOf("a"));       //-1 (not found)
console.log(string.indexOf("o"));       //3 (returns only 1 index)


// Method chaining

let mss = "     hello     ";
// let newMsg = mss.trim();
// console.log("after trim :", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase :", newMsg);

// Alternate :
let newMsg = mss.trim().toUpperCase();
console.log(newMsg);


// slice 
// returns a part of the original string as a new string.
// str.slice(start, end); end idx is non inclusive

console.log(string.slice(7));   // coding
console.log(string.slice(2, 6));    //love
console.log(string.slice(-6));      //coding  string.length - 6 = 7


// replace
let s = "I love & love coding";
console.log(s.replace("love", "do"));   //I do & love coding.


// repeat
let fruit = "mango";
console.log(fruit.repeat(2));   //mangomango


// Practice Qs.

let m = "help!";
console.log(m.trim().toUpperCase());       //HELP!


let name = "ApnaCollege";
console.log(name.slice(4,9));       //Colle
console.log(name.indexOf("na"));        //2
console.log(name.replace("Apna","Our"));    //OurCollege

console.log(name.slice(4).replace('l','t').replace('l','t'));  //Cottege

