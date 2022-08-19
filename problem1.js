(function(){
    function getPrismHeight(volume,radius,perimeter){
        height = (volume*2)/(radius*perimeter);
        return height;
    }
    console.log(getPrismHeight(4,5,6));
    console.log(getPrismHeight(60,6,6));
    console.log(getPrismHeight(40,5,16));
})();