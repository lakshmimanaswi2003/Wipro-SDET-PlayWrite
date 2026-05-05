const studentName = "Vandana";
console.log("JavaScript setup is ready ",studentName);
console.log(`Welcome, ${studentName}`);
console.log(isNaN("hello"));
console.log(false || "def");
console.log(5 | 3);
console.log(5 & 3);
console.log(5<<1);
console.log("ab"-1);
console.log(2-"1");
console.log('2'>1);
console.log("10"*2);
console.log("8"/"2");
console.log("abc"*3);

console.log("5" + "2" + "3");
//
console.log(5+2+"3");
//
console.log("hello" + true);
//
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("text")); // true
console.log(Boolean(5)); // true
console.log(10 == "10"); // true  here we are comparing only the values
console.log(10 === 10); // false here we are comparing the values along with the datatype
console.log(null == undefined); //true 
console.log(null === undefined); // false