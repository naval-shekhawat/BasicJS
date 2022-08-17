(function(){
    
    function HowtoPlay(temp,rain){
      if(temp>20 && temp<25 && rain == false) {
        console.log('Go Play OUTSIDE !!')
      }
      else if(temp>18 && temp<20 && rain==true){
        console.log('Go To Play SCHOOL !!')

      } 
      else{console.log('STAY AT HOME !!')
    }
}
console.log(HowtoPlay(0,rain))
    

})();