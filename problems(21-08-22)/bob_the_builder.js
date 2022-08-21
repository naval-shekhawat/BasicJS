(function() {

    function getNumberOfBricks(lengthofWall, breadthOfWall, thicknessOfWall){
        const volumeOfBrick = 24*12*8;
        const actual_wall = 0.85;
        let volumeOfWallinCm = lengthofWall * breadthOfWall * thicknessOfWall * 100 *100*100;
        return Math.ceil((actual_wall * volumeOfWallinCm)/volumeOfBrick);
    }

    console.log(getNumberOfBricks(24,8, 0.6))

})();