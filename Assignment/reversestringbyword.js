(function(){


function reverse(str) {
	let word = "";
    let String = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] != " " && str[i + 1] != undefined) {
			word += str[i];
		} else {
			if (str[i + 1] == undefined) {
				word += str[i];
			}
            String = word + " " + String;
			word = "";
		}
    }
    return String;
}
console.log(reverse("My name is Sushovan"));
})();