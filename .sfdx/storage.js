let savedTheme=localStorage.getItem("theme");
if(savedTheme){
     document.body.classList.add(savedTheme);
}
else{
     document.body.classList.add("light");
}
let btn=document.querySelector("#toggleBtn");
btn.addEventListener("click",function(){
    if(document.body.classList.contains("light")){
     document.body.classList.remove("light");
       document.body.classList.add("dark");
        localStorage.setItem("theme","dark");
    }
    else if(document.body.classList.contains("dark")){
         document.body.classList.remove("dark");
       document.body.classList.add("light");
        localStorage.setItem("theme","light");
    }
});