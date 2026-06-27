console.log(1);
let btn=document.querySelector('#btn');
console.dir(btn);
let input=document.querySelector('input');
btn.addEventListener("click",function(dets){
    //console.log(dets);
    input.click();
})
input.addEventListener("change",function(det){
    console.log(det);
    if(det.target.files.length!=0){
    btn.textContent=det.target.files[0].name+' Uploaded Successfilly ';
     btn.style.backgroundColor="green";
    btn.style.Color="white";
    }
});