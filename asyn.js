//let promise= new Promise(function resolve(){},function reject(params) {
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve(10000)
        //reject("Err hai")
    },3000)
 });

 promise1.then((data)=>{   //once called the promise then
    console.log(data);})
    .catch((err)=>{
    console.log(err)})
    .fainally(()=>{
    console.log("this printed irrespect of resolve")
 })
