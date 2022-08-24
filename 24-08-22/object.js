(function(){
    let altroz = {
        isDarkEdition: true,
        year: 2021,
        brand : "TATA"
    }

    console.log(typeof altroz);
    console.log(altroz["brand"]);// getter
    console.log(Object.keys(altroz)); // all the keys of altroz object
    console.log(Object.values(altroz)); 

    altroz["year"] = "2020"; //setter
    console.log(Object.values(altroz)); 

    // add new property
    altroz["mileage"] = "18";
    console.log(Object.values(altroz)); 

    console.log(altroz.brand);
    console.log(altroz["brand"]);

    // for..in
    for(let i in altroz) {
        console.log("values  " + altroz[i]);
    }

    // Object.keys() and Object.values() gives u an array
    for(let value of Object.values(altroz)){
        console.log(value);
    }

    // Object entries
    console.log(Object.entries(altroz));

    for(let entry of Object.entries(altroz)) {
        console.log(entry[0]);
    }

    let nexon = {
        isElectric : true
    }

    Object.assign(nexon, altroz);
    console.log(nexon);
    console.log(altroz);
})();