(function(){
    function getOfficeDistance(x,y){
        let t = ((x*y)-(5*x)+(y)-10);
        dist = x*(t+y);
        if(dist >=0){return dist;}
        else{console.log("Put valid values dist cannot be Negative")}
    }
    var speed = 5
    var time = 2
    console.log(getOfficeDistance(speed,time));
})();