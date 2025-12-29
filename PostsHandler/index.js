const usersList = document.getElementById("myList") ;
const myPosts = document.getElementById("myPosts")  ;

function GetAllUsers(){
    let request = new XMLHttpRequest() ;
    request.open("GET","https://jsonplaceholder.typicode.com/users") ;
    request.responseType = "json" ;
    request.send() ;
    request.onload = function(){
        if(request.status <300 && request.status >= 200){
            console.log("response is OK") ;
              var users = request.response ; // if there were any colisions we would used let instead of var
              let user ; // this declaration usally it not necessary since the var will be declared in the loop
         for(user of users){
      usersList.innerHTML += `
      <li class='uIcon' onclick= 'getPosts(${user.id }, this)'> <!-- we will send the element it self to style it -->
      <h2 class='username'> ${user.name}  </h2> 
       <p class='gmail'>${user.email} </p>
        </li>
      `
       // we could use the DOM technique but this is faster 
    } 
            }
       
    }
  

}
GetAllUsers() ;

function getPosts(userId , elem){
    let selectedElems = document.getElementsByClassName("selected") ;
     let selectedElem ;
    for(selectedElem of selectedElems){
        selectedElem.classList.remove("selected") ; // removing the old selected one from the class , making it non selected
   // i dont think that we need a loop since it always the first in that array (slectedElem[0]) but it is better for safety 
    }
    elem.classList.add("selected") ;
    //all this part  above is for some styling you can remove it if you want . it adds a colorfull border on the selected element 
   
    let request = new XMLHttpRequest() ;
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId=" + userId) ;
    request.responseType = "json" ;
   request.send() ;
   request.onload = () => {
    if(request.status >= 200 && request.status < 300 ){
        myPosts.innerHTML = "" ; // this was made to empty the screen before adding new posts
        console.log("respomse is ok") ;
        let posts = request.response ;
        for(post of posts){
            let content = `
             <li class="post">
                 <h2 class="title">${post.title}</h2>
                 <p class="text"> ${post.body}</p>
            </li>
            `
            myPosts.innerHTML += content ;
         // or you can do   myPosts.appendChild(content) ; (the DOM technique)
            

        }

    }else{
        alert("error") ;
    }
   }
}