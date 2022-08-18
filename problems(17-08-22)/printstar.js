(function(){

    function printStars(noOfStars){ // 5
        for(let i = 1; i <= noOfStars; i++){
            for(let j = 0 ; j < i ; j++) {
                document.write("*");
            }
            document.write("<br/>");
        }
    }
    
    printStars(5);
    
    })();