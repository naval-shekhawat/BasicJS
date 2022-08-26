(function(){
    let numbers = [9,23, 8, 5, 4, 2]; 
    let sum = numbers.reduce(function(prev, curr){
        return prev + curr; 
    })

    console.log(sum);


    let donations = [
        {
            name : "XYZ Company",
            amount: 1000
        },
        {
            name : "ABC Company",
            amount: 5000
        },
        {
            name : "PQR Company",
            amount: 500
        }
    ]

    let totalAmount = donations.map((item) => item.amount).reduce((prev, curr) => prev + curr,3500)
    
   
     console.log(totalAmount);
})();