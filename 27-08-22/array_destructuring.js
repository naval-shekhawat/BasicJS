(function(){
    // Array destructuring
    let name = ["Vijay", "J", "Shekhawat"];
    // let lastName = name[2];
    // let firstName = name[0];
    // let middleName = name[1];

   // let [,middleName,] = name;
   //console.log(middleName);
    let [firstName, middleName="K", lastName, x = 25] = name;
    //console.log("My name is " + firstName + " " + middleName + " " + lastName );
    console.log(`My name is ${firstName} ${middleName} ${lastName}`);
    console.log(x);

    let cities = ['Mumbai', 'Chennai', 'Kolkatta', 'Delhi'];
    let [,second, ...restOfTheCities] = cities;
    console.log(restOfTheCities);
    console.log(second);

})();