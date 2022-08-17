(function(){
    
    function HowtoPlay(temp,rain){
      if(temp>20 && temp<25 && rain == false) {
        console.log('Go Play OUTSIDE !!')
      }
      else if(temp>18 && temp<20 && rain==true){
        console.log('Go To Play In SCHOOL !!')

      } 
      else{console.log('STAY AT HOME !!')
    }
}
console.log(HowtoPlay(24,false));
console.log(HowtoPlay(19.5,true));
console.log(HowtoPlay(22,false));
console.log(HowtoPlay(24,true));

    

})();