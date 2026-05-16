function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
export default sum;
//export default sum; => it will export the sum by default and we can able to call it with any name like 'add' etc it still reffers to the sum.
//export {sum,sub}; => it is going to export the two functions. here we have to use the exact names like 'sum' and 'sub'.
//module.exports ={sum,sub}=> this is used only in .js file not in .mjs file we can import it like const {sum,sub}=require('./op.mjs')

