import axios from 'axios';
let parametres = {
    country : "DZ" ,
    city : "Bejaia"
}
 let timings 
 let ReadableDate
let englishDay 
let ArabicDay 
let ArabicMonth
let ArabicYear 
axios.get('http://api.aladhan.com/timingByCity?country=SA&city=Bejaia',{
    params:parametres
}

).then(function(response){
    // to get the data with axios whe write response.data and the api store what we need in key (attribute) called data so we will write response.data.data
    console.log("succesfull response") ;
   timings = response.data.data.timings ;
   ReadableDate = response.data.data.date.readable ;
   englishDay = response.data.data.date.weekday.hijri.en ;
   ArabicDay = response.data.data.date.weekday.hijri.ar;
   ArabicMonth = response.data.data.date.Month.hijri.ar;
   ArabicYear = response.data.data.date.Year.hijri.ar;
   
UpdateData() ;
   
})
.catch(function(error){
    console.log(error)
})
function UpdateData(){
    document.getElementById("Fajr-t").innerHTML = timings.Fajr ;
    document.getElementById("Dhohr-t").innerHTML = timings.Dhuhr ;
    document.getElementById("Chourouk-t").innerHTML = timings.Sunrise ;
    document.getElementById("Asr-t").innerHTML = timings.Asr ;
    document.getElementById("Maghrib-t").innerHTML = timings.Sunset ;
    document.getElementById("Aishaa-t").innerHTML = timings.Isha ;
    document.getElementById("DH").innerHTML =  englishDay +" "+ ReadableDate + "<br>" + ArabicYear +" "+ ArabicMonth +" "+ ArabicDay ;

    
    document.getElementById("Location").innerHTML = "Algeria, Bejaia" ;
}
