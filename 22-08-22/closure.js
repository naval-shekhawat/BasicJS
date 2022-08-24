(function(){

    function SuperHero() {
        let firstName ="Peter";
        let lastName = "Parker";
        let superPower = "web shoot";

        function getIdentity() {
            return firstName + " " + lastName;
        }

        return {
            superPower: superPower,
            getIdentity: getIdentity
        }
    }

     console.log(SuperHero().getIdentity());
})();