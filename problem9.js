(function(){

    function printStars(num){
        for(let i = 0; i<=num;i++){
            for(let j = 0 ; j<i; j++){
                console.log('*')
            }
            console.log('\n');
        }
    }
    printStars(7);
})();