(function(){
   function binomial(num, k){
        if(k > num) return 0;
        if(k == 0 || k == num)  return 1;
        return binomial(num - 1, k -1 ) +  binomial(num - 1, k)
   }

   console.log(binomial(6,3))
})();