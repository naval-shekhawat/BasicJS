(function(){

    function findDistance(x, y){
        let time = y* (x+1) - 5 *(x+2);
        let distance = ((y+time)/60) * x;
        return distance;
    }
    console.log(findDistance(4,20));
})();