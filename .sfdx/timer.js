let tm=setInterval(()=>{
    console.log("Hello");
},3000);

clearInterval(tm);

let counter=10;
let demo=setInterval(function(){
    if(counter==0){
        console.log("Time End");
        xyz();
    }else{
         console.log(counter);
    }
    counter--;
},1000);



function xyz(){
    clearInterval(demo);
}

let progress=document.querySelector('#progress');
let percent=document.querySelector('#percent');
let down1=document.querySelector("#down");
let count=1;
let down=setInterval(function(){
    percent.textContent=(10*count)+'%';
    progress.style.width=(10*count)+'%';
    if((10*count)==100){
         down1.textContent='Downloaded';
        down1.style.color="green";
    }
    count++;
    if((10*count)>100){
        clearInterval(down);
    }
},2000);

localStorage.setItem("friends",JSON.stringify(["akash","Vikash","Prakash"]));
let dosts=localStorage.getItem("friends");
console.log(dosts);
console.log(dosts[0]);
let dostsAgain=JSON.parse(dosts);
console.log(dostsAgain);
console.log(dostsAgain[0]);
console.log(typeof dosts);