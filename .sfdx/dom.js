console.log('Vivek');
//let h1=document.querySelector("h1");
//console.dir(h1);
//h1.innerHTML="<i>Badhiya hun bhai.Tu kaisa hai !</i>";
//h1.innerText="<i>Badhiya hun bhai.Tu kaisa hai !</i>";
//h1.textContent="Badhiya hun bhai.Tu kaisa hai !";
//console.dir(h1);

let a=document.querySelector("a");
console.dir(a);
a.href="https://www.google.com";
console.dir(a);

let img=document.querySelector("img");
img.setAttribute("src","https://images.unsplash.com/photo-1774333406492-2806c117fe59?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8");

let h1=document.createElement("h1");
console.log(h1);
h1.innerHTML='<i>Hello bhailog kaise ho</i>';
console.dir(h1);
document.querySelector("body").prepend(h1);
document.body.prepend(h1);

//js se kaise style chnage krte hai

/*let h2=document.querySelector("h2");
console.dir(h2);
h2.style.backgroundColor='purple';
h2.style.width='30%';
h2.style.height='30%';*/


/*let h2=document.getElementById("heading");
console.dir(h2);
//h2.classList.remove('hulu');
//h2.classList.toggle('hulu');
h2.classList.add('hulu');
h2.textContent='Welcome To Shreyians';
let lis=document.querySelectorAll("li");
console.dir(lis);
lis.forEach(function(val){
    console.log(val.textContent);
});

let p=document.querySelector("p");
p.innerHTML="<b>Updated</b> By Javascript";

let li=document.createElement("li");
li.textContent='F';
document.querySelector("ul").appendChild(li);

let ele=document.querySelector("li");
document.querySelector("ul").removeChild(ele);

let items=document.querySelectorAll("li");
for(let i=0;i<items.length;i++){
    if((i+1)%2==0){
        items[i].classList.add('hulu');
    }
}*/

let eve=document.querySelector("h2");
eve.addEventListener("click",function(){
    eve.style.color="red";
});

let ps=document.querySelector('p');
ps.addEventListener("dblclick",function(){
    ps.style.color="green";
});

let input=document.querySelector("input");
console.dir(input);
input.addEventListener("input",(eve)=>{
    console.log(eve);
    console.log(eve.data);
    console.log(eve.target.value);
})

let select=document.querySelector("select");
console.dir(select);
let h5= document.querySelector("h5");
select.addEventListener("change",function(eve){
    console.log(eve);
    if(eve.target.value!=null){
        h5.textContent=`${eve.target.value} Selected Successfully`;
        h5.style.color="green";
        h5.style.fontStyle='italic';
    }
});

window.addEventListener("keydown",function(dets){
    console.log(dets);
    let input=document.getElementById("heading");
    input.textContent='Thik Hu Bhai Aur Tu Bta';
});
