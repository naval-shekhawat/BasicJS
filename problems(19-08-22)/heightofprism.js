(function(){

    function findHeight(volume, perimetre, radius){
        let semiperimetre = perimetre /2;
        let h = volume / (radius * semiperimetre);
        return h;
    }
    console.log(findHeight(3, 15, 270));
})();