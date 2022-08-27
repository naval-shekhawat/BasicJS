(function(){
    let obj1 = {
        name: "John",
        age: 34,
    }

    let obj2 = {
        name: "John",
        age: 34,
        location: "London"
    }

    function isEqual(first, second){
        let equal = true;
        let firstObjKeys = Object.keys(first);
        let secondObjKeys = Object.keys(second);
        let objToIterate = first;
        if(secondObjKeys > firstObjKeys) {
            objToIterate = second;
        }
        for(let key in objToIterate) {
            if(first[key] !== second[key]){
                equal = false;
                break;
            }
        }

        return equal;
    }

    console.log(isEqual(obj1, obj2));
})()