
let bankingModule = (function(openingAmount){
    let balance = openingAmount;
    function getBalance() {
        return balance;
    }

    function withdraw(amountToWithdraw){
        if(balance - amountToWithdraw > 1000) {
            balance = balance - amountToWithdraw 
        } else{
            console.log("Insufficient Fund")
        }
    }

    function deposit(amountAdded){
            balance = balance + amountAdded 
    }

    return {
        getBalance: getBalance,
        withdraw: withdraw,
        addFund: deposit
    }
})(1000);



console.log("Outside ")
console.log(bankingModule);
console.log(bankingModule.getBalance()); // 0
// bankingModule.addFund(10000); 
// console.log(bankingModule.getBalance()); // 10000
// bankingModule.withdraw(5000);
// console.log(bankingModule.getBalance()); //5000
// bankingModule.withdraw(5000);// Insuficent fund
// (bankingModule.getBalance()); //5000