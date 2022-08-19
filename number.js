(function()
{
    function checkNumber(num)
    {
        switch (true) {
            case num > 0:
                return "Positive Number";
            case num < 0:
                return "Negative Number";
            case num == 0:
                return "Number is Zero";            
            default:
                return "Not A Number";
        }
    }
    console.log(checkNumber(89));
    console.log(checkNumber(-98));
    console.log(checkNumber(0));
    console.log(checkNumber("Dev"));
 }
 
)()