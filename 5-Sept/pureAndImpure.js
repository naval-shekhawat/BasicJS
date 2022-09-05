(function (){
    let total_count = 20;

   function sum(a,b) {
    let c = a + b;
    return c;
   }

   function add(a,b) {
    total_count += total_count + a + b;
    return total_count;
   }  

   function addItem(arr, item){
        arr.push(item);
        return arr;
   }

   let a = 24;
   let b = 10;
   console.log("Sum " + sum(a,b));
   console.log("Add " + add(a,b));
   console.log("Add " + add(a,b));
   console.log("Add " + add(a,b));
   console.log("Add " + add(a,b));

   let numbers = [1,2,3,4,5];
   console.log(addItem(numbers, 6))
   console.log(numbers);
})()