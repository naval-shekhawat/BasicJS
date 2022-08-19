(function()
{    
    let height ;
    function getHeight(radius, perimeter, volume)
    {
       let semiperimeter = perimeter / 2;
       let area = radius * semiperimeter;
       let height = volume / area;
       return height;
    }
    console.log(getHeight(3, 15, 270));
    console.log(getHeight(5, 18, 270));
})();