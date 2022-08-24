// (function(){

//     function findLCM(number1,number2) {
//        for (let i = 1; i <= number1 && i <= number2; i++) {
//         if( number1 % i == 0 && number2 % i == 0) {
//             hcf = i;
//         }
//     }
//     let lcm = (number1 * number2) / hcf;
//     console.log(lcm);
//     }
//     console.log(findLCM(24,36));
// })();

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