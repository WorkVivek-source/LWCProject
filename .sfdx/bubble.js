console.log(1);
console.log(1);
let nav=document.querySelector("#nav");
nav.addEventListener("click",function(){
    nav.style.backgroundColor="green";
})

let ul=document.querySelector("ul");
ul.addEventListener("click",function(e){
    e.target.classList.toggle("lt");
});

let input=document.querySelector("input");
console.log(input);
let span=document.querySelector("span");
input.addEventListener("input",function(eve){
    console.log(eve);
    console.log(eve.value);
    console.log(eve.target.value.length);
    span.textContent=20-eve.target.value.length;
    if(eve.target.value.length>20){
        span.style.color="red";
    }
    else{
         span.style.color="black";
    }
})