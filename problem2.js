(function(){
    function PassorNot(marks){
       return marks >=40 ? "You are pass" : "you're fail";
    }

    console.log(PassorNot(60));
    console.log(PassorNot(70));
    console.log(PassorNot(08));
    console.log(PassorNot(100));
    console.log(PassorNot(45));
    console.log(PassorNot(22));
})();