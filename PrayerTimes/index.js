
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
let HijriDay 
axios.get('https://api.aladhan.com/v1/timingsByCity?city=Bejaia&country=Algeria&method=2',{
    
    params:parametres
}

).then(function(response){
    // to get the data with axios whe write response.data and the api store what we need in key (attribute) called data so we will write response.data.data
    console.log("succesfull response") ;
   timings = response.data.data.timings ;
   ReadableDate = response.data.data.date.readable ;
   englishDay = response.data.data.date.hijri.weekday.en ;
   ArabicDay = response.data.data.date.hijri.weekday.ar;
   ArabicMonth = response.data.data.date.hijri.month.ar;
   ArabicYear = response.data.data.date.hijri.year;
   HijriDay = response.data.data.date.hijri.day;
   document.getElementById("Location").innerText = "Algeria, Bejaia" ;
   
UpdateData() ;
   
})
.catch(function(error){
    console.log(error)
})
function UpdateData(){
    document.getElementById("Fajr-t").innerHTML = timings.Fajr ;
    document.getElementById("Dhohr-t").innerHTML = timings.Dhuhr ;
    document.getElementById("Asr-t").innerHTML = timings.Asr ;
    document.getElementById("Chourouq-t").innerHTML = timings.Sunrise ;
    document.getElementById("Maghrib-t").innerHTML = timings.Sunset ;
    document.getElementById("Aishaa-t").innerHTML = timings.Isha ;
    document.getElementById("DH").innerHTML =  englishDay +" "+ ReadableDate + "<br>" + " " + ArabicYear + " " + ArabicMonth +" "+  HijriDay +" "+ ArabicDay ;
    document.getElementById("MidNight").innerHTML =  timings.Midnight;
    document.getElementById("LastThird").innerHTML =  timings.Lastthird;
    
}
