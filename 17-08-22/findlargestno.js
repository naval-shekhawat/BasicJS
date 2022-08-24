(function(){

    function findLargestno(first, second, third){
        if(first >= second && first >= third){
            return first;
        }else if(second >= first && second >= third){
            return second;
        }else {
            return third;
        }
    }

    console.log(findLargestno(10,20,30));
    console.log(findLargestno(12,28,35));
    console.log(findLargestno(5,220,305));
})(); 