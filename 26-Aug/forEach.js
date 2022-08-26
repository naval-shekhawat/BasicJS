(function() {
    let numbers = [1,4,5,6,7,8];
    numbers.forEach(function(item,index,arr){
        arr[index] = item * 5;
    })

    console.log(numbers);

    let heroes = [
        {
            name: "Tony",
            lastName: "Stark"
        },
        {
            name: "Bruce",
            lastName: "Banner"
        },
        {
            name: "Steve",
            lastName: "Rogger"
        }
    ];

    heroes.forEach((item) => {
        item.fullName = item.name + " " + item.lastName
    });

    console.log(heroes);
})();