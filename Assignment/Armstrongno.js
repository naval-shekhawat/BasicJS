(function(){

    function findArmstrongno(num){
        let temp = num;
        let sum = 0;       
        while(temp > 0){
           let Reminder = temp % 10;                    
           sum += (Reminder * Reminder * Reminder);
           temp = parseInt((temp / 10));
        }
        if(sum == num){
            console.log("this is an armstrong no");
        }else {
            console.log("Not an armstrong no");
        }
        return sum;
    }

        console.log((findArmstrongno(153)));
        console.log((findArmstrongno(121)));
        console.log((findArmstrongno(371)));
        // for the case of 121 its not working....
        // and this proggrame will not applicable for four digit nummbers 
       
})();