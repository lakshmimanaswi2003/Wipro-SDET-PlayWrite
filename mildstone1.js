
var data=[
    {id:1, amount:500,status:"completed"},
    {id:2, amount:0,status:"completed"},
    {id:3, amount:300,status:"pending"},
    {id:4, amount:-100,status:"completed"},
    {id:5, amount:700,status:"completed"}
];

function valid(data){
    var validusers=0;
    var totalamount=0;
    var valdat=data.map(d=>{
        if(d.amount>0 && d.status=="completed"){
            validusers++;
            totalamount+=d.amount;
        }
    });
    return{
            validusers,
            totalamount
    };
    return valdat;
}
console.log(valid(data));

/*
2.
var data=[5,8,null,"",10];
var validorders=0;
var quantity=0;
for(i=0;i<data.length;i++){
    if(typeof data[i] === "number"){
        validorders++;
        quantity+=data[i];
    }
    else{
        continue;
    }
}
console.log("Valid orders: "+validorders);
console.log("quantity: "+quantity);
*/