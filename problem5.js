(function(){
    function reverseString(string){
        let updateString ="";
        for(let i = string.length-1; i >= 0; --i){
                updateString = updateString + string[i];
            
        }

        return updateString;
    }
    console.log(reverseString('I like Coding'));
    console.log(reverseString('My name is Pragya'));
    console.log(reverseString('I am 18 years old'));
})();