(function(){
    function counter(){
        let count = 0;
        let a;
        let b;

        return function(value) {
           count += value;
           console.log(count)
           console.log(a);
        }
    }

    let innerFunc  = counter();
  //  innerFunc(5);

  for(var i = 0; i < 5; i++){

    setTimeout((i)=> {
        console.log(i);
    }, 1000)

    console.log("Hello");
  }

const arr = ['a', 'b', 'h',  'e', 'c'];
arr.sort(function(a,b) {
    return b.localeCompare(a);
});

console.log("Sorted Array " + arr);

let c = arr.find((item) => item == "d");
console.log(c);

})()