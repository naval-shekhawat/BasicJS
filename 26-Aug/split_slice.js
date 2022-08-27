(function(){

    // split
    var str = "Relevel";
    var char =  str.split("");
    console.log(char);

    var sentence = "Tony Stark is the Iron Man";
    var words =  sentence.split(" ");
    console.log(words);

    var anchor = "<a href='www.relevel.com'></a>";
    var link =  anchor.split("'");
    console.log(link);


    //slice
    let cities = ['Mumbai', 'Chennai', 'Kolkatta', 'Delhi'];
    let slicedCities =  cities.slice(0,-2)
    console.log(slicedCities);

    // splice
    console.log("===================== SPLICE =======")
    let states = ['Maharashtra', 'TN', 'WB', 'Delhi'];
    let removedStates = states.splice(1,2);
    console.log(states); // MH, Delhi
    console.log(removedStates); // TN, WB
    // states.splice(4,-1,"UP", "Bihar");
    // console.log(states);
})();