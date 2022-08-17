(function(){

    function reversestring(str){
        let updateString = "";
        for(let i =str.length - 1; i >=0; i--){
            updateString =updateString + str[i];
        }
        return updateString;
    }
    console.log(reversestring("my name is sushovan"));
})();