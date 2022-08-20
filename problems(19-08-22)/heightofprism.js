(function(){

    function getHeightOfThePrism(radius, perimeter, volume){
        let semiperimeter = perimeter /2 ;
        let height = volume / (radius * semiperimeter);
        return height;
    }


    console.log(getHeightOfThePrism(3, 15, 270));


})();