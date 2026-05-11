//1. Create a program that swaps two numbers without using a third variable.
/*
var a=10;
var b=30;
a=a+b;//40
b=a-b;//10
a=a-b;//30
console.log(a,b);
*/
//2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.
/*
var a=3;
var b="hello";
var c=true;
var d=null;
var e;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
*/

//3. Convert temperature from Celsius to Fahrenheit using variables.
/*
var celsius=25;
var fahrenheat=(celsius*(5/9))+32
console.log(fahrenheat);
*/

//4. Create a simple calculator using variables and arithmetic operators.
/*
var a=5;
var b=10;
console.log(`addition : ${a+b}`);
console.log(`subtraction : ${a-b}`);
console.log(`multiplication : ${a*b}`);
console.log(`division : ${a/b}`);
console.log(`remainder : ${a%b}`);
*/

//5. Write a program that takes a user’s birth year and calculates age.
/*
var a=2003;
var currentyear=new Date().getFullYear();
var age=currentyear-a;
console.log(age);
*/


//6. Reverse a string without using built-in reverse methods.
/*
var a="hello";
var reversed="";
//console.log(a.split("").reverse().join(""));
for (i=a.length-1;i>=0;i--){
    reversed+=a[i];
}
console.log(reversed);

*/



//7.Count the number of vowels in a string.
/*
var a="hello";
var count=0;
for(i=0;i<a.length;i++){
    if(a[i]=='a' || a[i]=='e' || a[i]=='i'  || a[i]=='o' || a[i]=='u'){
        count++;
    }
}
console.log(count);
*/


//8.Check whether a string is a palindrome.
/*
var a="atta";
var b=a.split("").reverse().join("");
if(a===b){
    console.log("Palindrome");
}
else{
    console.log("not a palindrom");
}
*/


//9.Capitalize the first letter of every word in a sentence.
/*
var a="hey everyone how are you all!!!";
b=a.split("");
b[0]=b[0].toUpperCase();
console.log(b[0]);
for(i=1;i<b.length;i++){
    if(b[i]==" "){
        b[i+1]=b[i+1].toUpperCase();
        i=i+2;
    }
}
console.log(b.join(""));
*/


//10.Find the longest word in a sentence.
/*
var a="hey everyone how are you all!!!";
var b=a.split(" ");//convert the string into an arrya
var longest="";
for(i=0;i<b.length-1;i++){
    if(longest.length<b[i].length){
        longest=b[i];
    }
}
console.log(longest);
*/



//11.Generate a random number between 1 and 100.
/*
b=Math.random()*100;
console.log(b);
*/


//12.Check whether a number is prime.
/*
 var a=12;
 var count=0;
 for(i=1;i<=12;i++){
    if(a%i==0){
        count++;
    }
 }
 if(count==2){
    console.log("prime");
 }
 else{
    console.log("not prime");
 }
*/


//Find factorial of a number using loops.
/*

var a=5;
var b=1;
for(i=1;i<=a;i++){
    b =b*i;
}
console.log(b);
*/


//Find Fibonacci series up to n numbers.
/*
var n=5;
var a=0;
var b=1;
for(i=1;i<=5;i++){
    if(i==1){
        console.log(a);
    }
    else if(i==2){
        console.log(b);
    }
    else{
        var c=a+b
        console.log(c);
        a=b;
        b=c;
        
    }

}
*/



//Check whether a number is Armstrong number.
/*
var a=153;
var e=a;
var d=0;
while(a>0){
    var b=a%10;
    var c=b*b*b;
    var d=d+c;
    a=Math.floor(a/10);

}
if(e===d){
    console.log("palindrome");
}
else{
    console.log("not a palindrome");
}
 */


//Find the largest and smallest number in an array.

/*
var a=[10,20,30,40,50];
var b=a[0];
var c=a[0];
for(i=1;i<a.length;i++){
    if(b<a[i]){
        b=a[i];
    }
    if(c>a[i]){
        c=a[i];
    }
}
console.log(`highest value in the array : ${b}`);
console.log(`lowest value in the array : ${c}`);
*/


//Remove duplicate elements from an array.
/*

var a=[1,1,2,2,3];
var count=0;
for(i=0;i<a.length-1;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            count++;
        }
        if(count==1){
            a.splice(j,1);//j is the index and 1 is nothing but removes one element.
            count=0;
        }
    }
}
console.log(a);
*/


//Sort an array without using built-in sort().
/*
var a=[1,3,5,2,4];
var b;
for(i=0;i<a.length-1;i++){
    for(j=i+1;j<=a.length;j++){
        if(a[i]>a[j]){
            var b=a[j];
            a[j]=a[i];
            a[i]=b;
        }
    }
}
console.log(a);
*/


//Find second largest number in an array.
/*
a=[1,3,5,7,2];
var b=a[0];
var c;
for(i=1;i<a.length;i++){
    if(b<a[i]){
        b=a[i];
        c=i;
    }
}
a.splice(c,1);
console.log(a);
var d=a[0];
for(i=1;i<a.length;i++){
    if(d<a[i]){
        d=a[i];
    }
}
console.log(`the second largest element in the array is ${d}`);
*/


//Merge two arrays and remove duplicates.
/*
var a=[1,2,3,4,5,];
var b=[4,5,6,7,8];
var c=a.concat(b);
var count=0;
for(i=0;i<c.length-1;i++){
    for(j=i+1;j<c.length;j++){
        if(c[i]==c[j]){
            count++;
        }
        if(count>0){
            c.splice(j,1);
            count=0;
        }
    }
}
console.log(c);
*/


//Create an object for a student and display all properties dynamically.

/*
var student=[
    {name : "vani" ,  id: 1 , batch : "b1"},
    {name : "vena" , id : 2, batch : "b4"},
    {name : "hari" , id : 3 , batch : "b2"},
    {name : "vamsi" , id : 4 , batch : "b3"}
];
console.log(student);
*/

//Count number of keys in an object.
/*
var student=
    {name : "vani" ,  id: 1 , batch : "b1"};
let count=Object.keys(student).length;
console.log(count);
*/


//Merge two objects into one.
/*
let a={n : "vani" ,  i: 1 , batc : "b1"};
let b={name : "vena" , id : 2, batch : "b4"};
let c={...a, ...b};
console.log(c);

*/


//Convert an object into an array of keys and values.
/*
let a={n : "vani" ,  i: 1 , batc : "b1"};
console.log("array of keys");
console.log(Object.keys(a));
console.log("array of values");
console.log(Object.values(a));
*/


//Create a shopping cart object and calculate total bill amount.
/*
let s=[
    {
        name : "atta",
        price : 60,
    },
    {
        name : "powder",
        price : 70
    }
];
let total=0
let d=s.reduce((sum,item)=>sum=sum+item.price,0);
console.log(d);
*/


//Print star pyramid patterns.
/*


let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    // spaces
    for (let j = 0; j <=n - i; j++) {
        row += " ";
    }

    // stars
    for (let k = 0; k < 2 * i + 1; k++) {
        row += "*";
    }

    console.log(row);
}
    */


//Print multiplication tables from 1 to 10.
/*
let a=2;
for(i=1;i<=10;i++){
    console.log(`${a} * ${i} = ${a*i}`);
}
*/


//Find sum of all even numbers between 1 and 100.
/*
let sum=0;
for(i=1;i<=100;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
console.log(sum);
*/


//Print all prime numbers between 1 and 100.

var count=0
for(i=1;i<=100;i++){
    for(j=1;j<=100;j++){
        if(i%j==0){
            count++;
        }
    }
    if(count==2){
        console.log(`${i} is a prime`);
        count=0;
    }
    if(count>2){
        count=0;
    }
}



//Create a number guessing game using loops.------------------------------------
/*

let guess=Math.floor(Math.random()*10);
console.log(guess);
let number=5;
while(number!=guess){
    if(number>guess){
        console.log("TOO High");
    }
    else if(number<guess){
        console.log("Too low");
    }
}
console.log("hurry!!! you are correct");

*/

//Create a function that returns the greatest of three numbers.
/*
function greatest(a,b,c){
    if(a>b && a>c){
        console.log(`${a} is the greatest number`);
    }
    else if(b>c && b>a){
        console.log(`${b} is the greatest number`);
    }
    else{
        console.log(`${c} is the greatest number`);
    }
}
greatest (1,2,3);
*/


//Write a function to check whether a number is palindrome.
/*
let a="atta";
let palin=(a)=>{
    let b=a.split("").reverse().join("");
    if(a===b){
        console.log("it is a palindrome");
    }
    else{
        console.log("it is not a palindrome");
    }
}
palin(a);
*/


//Write a function that accepts an array and returns only even numbers.
/*
let b=[1,2,3,4,5,6];
function a(b){
    for(i=0;i<b.length;i++){
        if(b[i]%2==0){
            console.log(b[i]);
        }
    }
}
a(b);
*/


//Create a calculator using functions for add, subtract, multiply, and divide.
/*
let a=5;
let b=10;
function calculator(a,b){
    console.log(`a+b : ${a+b}`);
    console.log(`a-b : ${a-b}`);
    console.log(`a/b : ${a/b}`);
}
calculator(a,b);
*/


//Predict output of variable hoisting examples.
/*
console.log(a);
var a=10;
console.log(a);
*/


//Create examples showing block scope using let.
/*
console.log(a);
let a=5;
console.log(a);
*/


//Write a program demonstrating closure behavior.
/*
function outterfun(){
    let count=0;
    count++;
    function innerfun(){
        count++;
        console.log(count);
    }
    return innerfun();
}
outterfun();
*/


//Create nested functions and access outer variables.
/*
let a=5;
function outterfun(){
    let count=0;
    count++;
    function innerfun(){
        count=count+5;
        console.log(count);
    }
    return innerfun();
    
}
outterfun();
*/


//Create a delayed greeting message using setTimeout.
/*
let greeting="hai all how are you!!!";
setTimeout(()=>{console.log(greeting)},3000);
*/


//Build a countdown timer.
/*
let time=10;
const timer=setInterval(()=>{
    console.log(`time : ${time}`);
    time--;
    if(time<0){
        clearInterval(timer);
        console.log("Time up");
    }
},1000);
*/


//Create a callback-based calculator.
/*

let a=10;
let b=20;
let sum;
function add(a,b,c){
    console.log(`add ; ${a+b}`);
    c();
}
function sub(a,b,c){
    console.log(`sub : ${a-b}`);
    c();
}
function mul(a,b,c){
    console.log(`mul : ${a*b}`);
    c();
}
function div(a,b){
    console.log(`div : ${a/b}`);
}
add(a,b,function(){
    sub(a,b,function(){
        mul(a,b,function(){
            div(a,b);
        });
    });
});
*/

//Simulate food ordering system using callbacks.
/*
function placeorder(name,c){
    console.log(`we place the order : ${name}`);
    c();
}
function processing(c){
    console.log("The food is preparing wait for 5 min");
    c();
}
function deliveried(){
    console.log("The food is deliveried enjoy your food!!!");
}

placeorder("pizza",function(){
    processing(function(){
        deliveried();
    });
});
*/



//Build an even/odd checker using arrow functions.
/*
var a=6;
let check=(a)=>{
    if(a%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
check(a);
*/


//Double all numbers in an array using map().
/*
var a=[1,2,3,4,5];
let data;
let i=0;
data=a.map(d=>d*2);
console.log(data);

*/


//Filter all students scoring above 80 marks.
/*
let a=[81,75,67,85,90,95,79,82];
let b=a.filter(d=> d>80);
console.log(b);
*/


//Print all array values using forEach().
/*
a=[1,2,3,4,5];
a.forEach(d=>console.log(d));
*/


//Convert array of names into uppercase.
/*
a=["hai","hello","how","are","you"];
a.map(d=>{
    console.log(d.toUpperCase());
})
    */


//Extract only even numbers using filter().
/*
a=[1,2,3,4,5,6,7,8,9,10];
a.filter(d=>d%2==0).map(d=>console.log(d));
*/



//Create examples showing primitive copying behavior.
/*
let a=3;
let b=a;
a=6;
console.log(b);
*/
// here we changed the 'a' value from 3 to 6 but it is not updated in b this is called primitive copying behaviour.


//Create examples showing object reference behavior.
/*
let a={name1:"henry"};
let b=a;
b.name1="mena";
console.log(a.name1);
*/
// here if we change an key value in obj 'b' it is also changing the object 'a'



//Clone an object without affecting original object.
/*
let a={name : "henry" , age : 28 , salary : 50000};
let b=a;
console.log(b);
*/



//Compare arrays using reference equality.
/*
let a=[1,2,3];
let b=[1,2,3];
console.log(a===b);//false
// return false because here all the values and the datatypes are same but in array it also checks if the array is having the same reference memory
//here they both has different memory so return false
*/
/*
let a=[1,2,3];
let b=a;
console.log(a===b);//true
//return true because here it refference to the same point.
*/



//Demonstrate shallow copy using spread operator.
/*
let a={name:"henry",age:20,salary:50000};
let b={...a};
console.log(b);
*/



//Create examples showing stack memory behavior.
//stack
/*
let a=10;
let b=a;
b=60;
console.log(a);
console.log(b);

*/
/*
let arr1=[1,2,3,4];
let arr2=arr1;
arr2.push(5);
console.log(arr1);
console.log(arr2);

*/



//Create examples showing heap memory references.
/*
let a={name:"henry",age:30,salary:50000};
let b=a;
b.salary=70000;
console.log(a);
console.log(b);
*/



//Trace execution order of nested function calls.
/*
function placedorder(){
    console.log("your order is placed");
    processing();
    console.log("end placeorder");
}
function processing(){
    console.log("your order is preparing");
    delivered();
    console.log("end processing");
}
function delivered(){
    console.log("your order is ready enjoy your food");
}
placedorder();
*/



//Create recursive factorial function.
/*
let b=1;
let c=5;
function recurssion(c){
    b=b*c;
    c--;
    if(c!=0){
        recurssion(c);
    }
    else{
        console.log(b);
    }
}
recurssion(c);
*/



//Build recursive Fibonacci function.
/*
let a=0;
let b=1;
let c=5;
let d=c;
let e;

function recurssion(c){
    if(c>0){
        if(c==d){
            console.log(a);
            c--;
            if(c>0){
                recurssion(c);
            }
        }
        else if(c==d-1){
            console.log(b);
            c--;
            if(c>0){
                recurssion(c);
            }
        }
        else{
            e=a+b;
            console.log(e);
            a=b;
            b=e;
            c--;
            if(c>0){
                recurssion(c);
            }
        }
    }
}
recurssion(c);
*/



//Simulate stack overflow with recursion.
/*
function overflow(){
    console.log("stack overflow");
    overflow();
}
overflow();
*/



//Convert JSON string into object.
/*
let a='{"name" : "henry", "age" : 30, "salary" : 70000}';
console.log(JSON.parse(a));
console.log(a);
*/