(function(){
    let names = [];
    console.log(names.length); //0
    console.log(names.push("Harish"));
    console.log(names.push("Mani")); //inserts at the end

    //names = ["Harish" , "Mani"]
    names.pop();

    console.log(names); // Harish
    names.push("Pragya");
    names.push("Abdul");

    console.log(names); // ["Harish", "Pragya" , "Abdul"]

    names.unshift("Vishal");
    console.log(names); // ["Vishal",Harish", "Pragya" , "Abdul"]

    names.shift();
    console.log(names); //[Harish", "Pragya" , "Abdul"]]
})();