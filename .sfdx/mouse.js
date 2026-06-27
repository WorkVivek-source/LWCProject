console.log(1);

let div=document.querySelector("#main");
console.dir(div);
div.addEventListener("mouseover",function(){
    div.style.backgroundColor="Yellow";
});
div.addEventListener("mouseout",function(){
    div.style.backgroundColor="red";
});

window.addEventListener("mousemove",function(e){
    console.log(e);
    div.style.left=e.clientX-(div.clientWidth/2)+"px";
    div.style.top=e.clientY-(div.clientHeight/2)+"px";
})