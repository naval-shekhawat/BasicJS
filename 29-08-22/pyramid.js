(function() {
    function pyramid(n){
        let rows = n;
        for(let i = 1; i <= rows; i++){
            for(let k = 1; k <= i; k++) {
                document.write("&nbsp;");
            }

            for(let j = i; j<=n; j++) {
                document.write("&nbsp;");
                document.write(j); 
            }
            document.write("<br />");
        }
    }

    pyramid(6);
})();