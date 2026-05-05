function getData(){
    return new Promise((resolve,reject)=> {setTimeout(()=> {resolve("Data success")},2000)});
}

// here iam preparing the asyn operation that is resolve and reject
 getData().then((data)=> {console.log(data);});
 //here we are using then function. this function only allows the data if the output is resolve from the above function
 getData().catch((error)=>{console.log(error);});
 // here we are using catch function. this function allows only the data if the output is rejected from the above function
//});
setTimeout(() => {
     console.log("Data received");
 }, 5000);
 //this setTimeout() function is used to set the time to get the output in mseconds
 
//setInterval(() => {
//     console.log("Checking for new data...");
 //}, 3000);
 //same as setTimeout() function it will repete again and again at particular time interval
