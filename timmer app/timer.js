function showDateDiff(){
    let selectedTimeElement = document.getElementById("dateTime");
    //console.log("it was clicked")
    console.log(selectedTimeElement.value);//string

    let now = new Date();
   let future = new Date(selectedTimeElement.value);

   let diff = future.getTime() - now.getTime();
   let differnceInDays = Math.floor( diff/(1000*24*60*60)/(1000*24*60))
   let differnceInHours = Math.floor(diff/(1000*60*60*24)/(1000*60*60 ))
   let differnceInMins = Math.floor(diff/(1000*60*60)/(1000*60 ))
   let differnceInSeconds = Math.floor(diff/(1000*60)/(1000))
   document.getElementById("day").innerHTML = differnceInDays
   document.getElementById("hours").innerHTML = differnceInHours
   document.getElementById("minutes").innerHTML = differnceInMins
   document.getElementById("Seconds").innerHTML = differnceInSeconds 

  


}