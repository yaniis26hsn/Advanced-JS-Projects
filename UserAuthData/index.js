
function LogIn(){
    const userN = document.getElementById("un").value ;
    const passW = document.getElementById("pw").value ;
    axios.post('https://dummyjson.com/auth/login',{
        "username" : userN ,
        "password" :passW
    }
       
    ).then((result) => {
        localStorage.setItem("token",result.data.accessToken) ;
      let token = localStorage.getItem("token") ;
      window.location = "success.html" ;
    }).catch((err) => {
        alert(err.response.data.message) ;
        document.getElementById("un").value = "" ;
        document.getElementById("pw").value = "" ;
    });

}
 function getData(){
    let dataEl = document.getElementById("Data") ;
     let token = localStorage.getItem("token");
     axios.get("https://dummyjson.com/auth/me", {
       headers: {
            'Authorization' : `Bearer ${token}`
        }
     })
     .then((result)=>{
        dataEl.innerHTML = JSON.stringify(result.data, null, 2) ; // this makes a json obj to a string 
      //  i could make the info outputting less ugly but i am lazy . mayble another day , maybe 
     }
     )
     .catch((err) =>{
        alert(err.response.data.message) ;
        
     }
     )


     }