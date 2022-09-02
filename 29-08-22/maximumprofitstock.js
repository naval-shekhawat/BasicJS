(function(){

    function maxProfit(arr) {

		let Profit = 0;
		for (let i = 1; i < arr.length; i++){
			if (arr[i] > arr[i - 1]){
				Profit += arr[i] -arr[i - 1];
            }
        }
		return Profit;
	}

		console.log(maxProfit([100,180,260,310,40,535,695]));


})();