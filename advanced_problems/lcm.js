(function(){
   function getLCM(number1, number2){
    let greater = number1> number2 ? number1 : number2;
    while(true) {
        if(greater % number1 == 0 && greater % number2 ==0) {
            break;
        }

        greater++;
    }

    return greater;
   }

   console.log(getLCM(24,36));
   console.log(getLCM(5,10));
})();