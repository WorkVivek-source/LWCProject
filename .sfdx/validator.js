let form=document.querySelector("form");
let email=document.querySelector("#email");
let pass=document.querySelector("#password");
console.dir(pass);
let small1=document.querySelector("#email-error");
let smallPass=document.querySelector("#password-error");
form.addEventListener("submit",(eve)=>{

    eve.preventDefault();
    console.dir(email);
    console.dir(pass);
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    console.log(email.value);
    console.log(pass.value);
    let ans=regex.test(email.value);
    let isValid=true;
    if(ans==false){
        small1.style.display='contents';
         small1.textContent='Email Invalid. Please provide valid email.';
         isValid=false;
    }
    else{
           small1.style.display='none';
    }
    let passAns=passRegex.test(pass.value);
    if(passAns==false){
        smallPass.style.display='contents';
        smallPass.style.color="red";
        smallPass.textContent='Password does not matching the criteria';
         isValid=false;
    }
    else{
         smallPass.style.display='none';
    }
    if(isValid){
        document.querySelector("#final").textContent='Email and passsword are Valid';
         document.querySelector("#final").style.color='green';
    }
});