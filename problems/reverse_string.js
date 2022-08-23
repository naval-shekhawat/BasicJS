(function(){
// Coding is fun  13 characters
    function reverseString(str){
        let updateString = "";
        for(let i = str.length - 1; i >=0; i--) {
            updateString = updateString + str[i];
        }

        return updateString;
    }

    console.log(reverseString("Coding is fun")); // fun is coding
    console.log(reverseString("Bruce Wayne is batman")); // batman is Wayne Bruce
})();