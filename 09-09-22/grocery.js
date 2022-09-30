let groceries = [
    {
        "name" : "Apple",
        "price" : 240,
        "unit" : "kg",
        "brand" : "Fuji",
        "prices" : {
            "oneKG" : 240,
            "halfKg" : 120,
            "twoKg" : 400
        }
    },
    {
        "name" : "Mango",
        "price" : 140,
        "unit" : "kg",
        "brand" : "Alphonso",
        "prices" : {
            "oneKG" : 140,
            "halfKg" : 70,
            "twoKg" : 250
        }
    },
    {
        "name" : "Apple",
        "price" : 140,
        "unit" : "kg",
        "brand" : "Shimla",
        "prices" : {
            "oneKG" : 240,
            "halfKg" : 120,
            "twoKg" : 400
        }
    }
];

let maxPrice = 0, itemName = '';
for(let currentItem of groceries){
    if(currentItem.price > maxPrice) {
        maxPrice = currentItem.price
        itemName = currentItem.name + " (" + currentItem.brand + ")";
    }
}

console.log(`Item  is ${itemName} with price ${maxPrice}`);