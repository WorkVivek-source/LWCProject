console.log(1);
let name1=document.querySelector("#name");
let form=document.querySelector("form");
let nm=document.querySelector("#nm");
form.addEventListener("submit",function(eve){
    eve.preventDefault();
    if(name1.value.length<=2){
        nm.style.display='contents';
    }
    else{
        nm.style.display='none';
    }
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans=regex.test('a@a.a');
    console.log(ans);

});