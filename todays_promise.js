//let promise= new Promise(function resolve(){},function reject(params) {
    let promise1= new Promise((resolve,reject)=>{
        setTimeout(() =>{
            resolve(10000)
            //reject("Err hai")
        },3000)
     });
     let add =function(x,y){
        return new Promise((resolve,reject)=>{
            let sum =x+y;
            if(sum){
                resolve(sum);
            }else{
                reject("Error:cant add")
            }
        })
     }
     add(3,2).then((data)=>{
     console.log("The sum is"+data)
    })
     .catch((err)=>{
        console.log("Eror:"+err)
     })
    
     promise1.then((data)=>{   //once called the promise then
        console.log(data);})
        .catch((err)=>{
        console.log(err)})
        .finallly(()=>{
        console.log("this printed irrespect of resolve")
     })

     let promise1 =new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            resolve("First Promise")
        },3000)

     })
     let promise2 =new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            resolve("Second Promise")
        },4000)

     })
     let promise3 =new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            resolve("Third Promise")
        },1000)

     })
     //promise.all-And condition
     //promise -Or condition
     Promise.all([promise1,promise2,promise3])
            .then((data)=>{
                console.log(data)
                 })

                 promise1.then((data)=>{   //once called the promise then
                    console.log(data);})
                    .catch((err)=>{
                    console.log(err)})
