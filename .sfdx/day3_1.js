
function CreateToaster(config){
    return function(notification){
        let parentDiv=document.querySelector(".parent");
         let div=document.createElement("div");
         div.className=`${config.theme=="dark" ? "bg-gray-800 text-white": "bg-gray-100  text-black"} px-6 py-3 rounded shadow-lg 
         pointer-events-none ${config.positionX=="right" ? "right-10": "left-10"} ${config.positionY=="top" ? "top-10" : "bottom-10"}`;
         div.textContent=notification;
         parentDiv.appendChild(div);

         setTimeout(function(){
            parentDiv.removeChild(div);
         },config.duration*1000);
    };
}
let toaster=CreateToaster(
    {
        positionX:"left",
        positionY:"top",
        theme:"light",
        duration:3,
    });

toaster("This is Good Demo");
setTimeout(()=>{
    toaster("Welcome To The Salesforce");
},2000);


console.log(this);


function abcd(){
    console.log(this);
}

abcd();

let xyz={
    name:"Vivek",
    age:26,
    sayName: function(){
        console.log(this);
    }
}// this yha object hai xyz pura 

xyz.sayName();

//this hmesha add eventListener ke andar jispe event listener lga hota wo hota hai yha pe jaise "h1" hai kyuki usi pe addEventListener lga hai
document.querySelector("h1").addEventListener("click",function(eve){
    alert(eve.target.value);
    console.log(this);
    this.style.color='red';
})

class Abcd{
     count=0;
    constructor(){
        console.log(this);
        this.a=12;
        this.count++;
        console.log(this);
    }
}

let val=new Abcd();
console.log(val);
console.log(val.a);

let val1=new Abcd();
console.log(val1);
console.log(val1.a);


