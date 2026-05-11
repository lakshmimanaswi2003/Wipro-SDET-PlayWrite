//**************************default argument****************************************
/*
function def(name="guest"){
    console.log(`my name is ${name}`);
}
def("henry");
def();
*/

//***********************************creating a function using spread operator*************
/*
var calculate={
    sum:(...opp)=>opp.reduce((acc,curr)=>acc+curr,0)
};
console.log(calculate.sum(10,20,30));
*/

//*****************************destructuring of arrays**********************************
/*
var [name,age,salary]=["henry" , 30, 50000];
console.log(name,age,salary);

*/
//*****************************destructuring of objects **********************************
/*
var {name,age,salary}={
    name:"henry",
    age:30,
    salary:50000
};
console.log(name);
*/