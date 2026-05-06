//async function getData(url){
//    let data= await fetch("https://jsonplaceholder.typicode.com/todos"); // cursor will wait in this line
//    data=>data.json;
//    return data;
//}
//getData().then(data=>console.log(data));

//******************************************fetching email from random user ******************************

//async function getData(){
//    let data = await fetch("https://randomuser.me/api/?results=10");
//    data=await data.json();
//    data=data.results;
//   data=data.filter(d=>d.cell != 0);
//    data=data.map(d=>d.email);
//    return data;
//}
//getData().then(data=>console.log(data));


/////**********************************************university url*********************************** */ */

//async function getData(url){
//    let data=await fetch("http://universities.hipolabs.com/search?country=India");
//   data=await data.json();
//    data=data.filter(d=>d.country === "India");
//    data=data.map(d=>d.web_pages);
//    return data;

//}
//getData().then(data=>console.log(data));

//**********************************************catfacts **********************************
//async function getData(url){
//    data= await fetch("https://catfact.ninja/facts");
//    data = await data.json();
//    data=data .data;
//    data=data.filter(d=>d.length>50);
//    data=data.map(d=>d.fact);
//    return data;
//}
//getData().then(data=>console.log(data));


//***************************************** randomuserAPI*************************************
//async function getData(url){
//    data = await fetch("https://randomuser.me/api/?results=10");
//    data = await data.json();
//    data=data.results;
//    data=data.filter(d=>d.cell !=0);
//    data=data.map(d=>d.gender);
//    return data;

//}
//getData().then(data=>console.log(data));


//**************************************** API comments*****************************
//async function getData(url){
//    data = await fetch("https://jsonplaceholder.typicode.com/comments");
//    data = await data.json();
//    data=data.map(d=>({
//    id:d.id,
//    email:d.email
//    }))
//    return data;
//}
//getData().then(data=>console.log(data));

//*************************************** todos*****************************************
//async function getData(url){
//    data = await fetch("https://jsonplaceholder.typicode.com/todos")
//    data= await data.json();
//    data = data.filter(d=>d.id%2===0);
//    data =data.map(d=>d.title="manaswi" + d.title);
//    return data;
//}

//getData().then(data=>console.log(data));


//************************************************** pokeapi*************************
//async function getData(url){
//    data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
//    data = await data.json()
//    data = data.results
//    data=data.map(d=>d.name);
//   return data;
//}

//getData().then(data=>console.log(data));

//********************************************* fake store******************************

//async function getData(url){
//    data = await fetch("https://fakestoreapi.com/products");
//    data =await data.json()
//    data =data.filter(d=>d.price>10);
//    data=data.map(d=>({
//        price:d.price,
//        title:d.title
//    }));
//    return data;
//}
//getData().then(data=>console.log(data));

//******************************************** users**************************************
//async function getData(url){
//    data= await fetch("https://jsonplaceholder.typicode.com/users");
//    data= await data.json()
//    data = data.filter(d=>d.id<=10);
//    data = data.map(d=>({
//        d: d.id,
//        username:"Manaswi " + d.username
//    }));
//    return data;
//}
//getData().then(data=>console.log(data));

//********************************************* posts***********************************
async function getData(url){
    data = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await data.json();
    data=data.filter(d=>d.id%3 === 0);
    data=data.map(d=>({
        id:d.id,
        title:d.title
    }));
    return data;
}
getData().then(data=>console.log(data));
