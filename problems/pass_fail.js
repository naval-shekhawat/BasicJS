(function(){

    function checkMarks(marks){
        return marks >= 40 ? "Passed" : "Failed";
    }

    let test_numbers = [45,40,90,23];
    for(let i = 0; i <= test_numbers.length; i++) {
        console.log(checkMarks(test_numbers[i]));
    }

})();