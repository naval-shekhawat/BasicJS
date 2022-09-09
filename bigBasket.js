(function  bigBasket(){

    const freshGreen = [

        {
        "Item_id": "Form-Eggs",
        "Size": "medium",
        "Delivery": "Standard-Delivery",
        "Price": {
            "6 pcs" : 41,
            "12 pcs" : 82,
            "24 pcs": 164
        }
        },

        {
            "Item_id": "Carrot-Orange",
            "Size": "Loose",
            "Delivery": "Standard-Delivery",
            "Price": {
                " 1 kg" : 73.50,
                " 2 kg" : 147.00,
            }
        },
        {
            "Item_id": "Tomato-Hybrid",
            "Size": "Loose",
            "Delivery": "Standard-Delivery",
            "Price": {
                "1 kg" : 36.50,
                "2 kg" : 73.00,
            }
        },
        
        {
            "Item_id": "Tomato-Local",
            "Size": "Loose",
            "Delivery": "Standard-Delivery",
            "Price": {
                "1 kg" : 34.00,
                "2 kg" : 68.00,
        }
        },

        {
            "Item_id": "Rice/Akki-Sona Masoori",
            "Size": "Raw",
            "Delivery": "Standard-Delivery",
            "Price": {
                "5 kg" : 255.00,
                "10 kg" : 500.00,
            }
        }
    ]

    //to welcome all the learners of relevel

    for( let{Item_id, Delivery} of freshGreen){

        console.log("the items under freshGreen today are:" +Item_id, +Delivery);
    }

   

})();
