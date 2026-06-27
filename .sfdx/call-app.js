let addNote=document.querySelector("#add-note");
let formContainer=document.querySelector(".form-container");
let closeForm=document.querySelector(".closeForm");
let input1=document.querySelector("input[placeholder='https://example.com/photo.jpg']");
let input2=document.querySelector("input[placeholder='Enter full name']");
let input3=document.querySelector("input[placeholder='Enter home town']");
let input4=document.querySelector("input[placeholder='e.g., Quick appointment note']");
let input5=document.querySelectorAll("input[name='category']");
let submitButton=document.querySelector(".submit-btn");
let form=document.querySelector("form");
const stack = document.querySelector(".stack");
const upButton=document.querySelector("#upBtn");
const downButton=document.querySelector("#downBtn");

console.log(input1);
addNote.addEventListener("click",function(){
    console.dir(formContainer);
    formContainer.style.display='initial';
});
closeForm.addEventListener("click",function(event){
    formContainer.style.display='none';
});

function saveToLocalStorage(obj){
    let oldTasks=[];
    if(localStorage.getItem("tasks")==null){
        oldTasks.push(obj);
        localStorage.setItem("tasks",JSON.stringify(oldTasks));
    }
    else{
       oldTasks=localStorage.getItem("tasks");
       oldTasks=JSON.parse(oldTasks);
       oldTasks.push(obj);
       localStorage.setItem("tasks",JSON.stringify(oldTasks));
    }  
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    let val1=input1.value.trim();
    console.log(val1);
    let val2=input2.value.trim();
    let val3=input3.value.trim();
    let val4=input4.value.trim();
    let selected=false;
    input5.forEach(function(radio){
        if(radio.checked){
            selected=radio.checked;
        }
    });
    
    if(val1 ===""){
        alert("Please enter an image url");
        return;
    }
     if(val2===""){
        alert("Please enter your full namel");
        return;
    }
     if(val3===""){
        alert("Please enter your home town");
        return;
    }
     if(val4===""){
        alert("Please enter the purpose");
        return;
    }
    if(!selected){
        alert("Please select the choice");
        return;
    }
    saveToLocalStorage({val1,val2,val3,val4,selected});
    form.reset();
    formContainer.style.display='none';
    showCards();
});

function showCards(task) {

  stack.innerHTML = "";

  let allTasks = JSON.parse(localStorage.getItem("tasks"));

  allTasks.forEach(function (task) {
    // Create card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Avatar image
    const avatar = document.createElement("img");
    avatar.src = task.val1;
    avatar.alt = "profile";
    avatar.classList.add("avatar");
    card.appendChild(avatar);

    // Name
    const name = document.createElement("h2");
    name.textContent = task.val2;
    card.appendChild(name);

    // Info: Home town
    const hometownInfo = document.createElement("div");
    hometownInfo.classList.add("info");

    const hometownLabel = document.createElement("span");
    hometownLabel.textContent = "Home town";
    const hometownValue = document.createElement("span");
    hometownValue.textContent = task.val3;

    hometownInfo.appendChild(hometownLabel);
    hometownInfo.appendChild(hometownValue);
    card.appendChild(hometownInfo);

    // Info: Bookings
    const bookingsInfo = document.createElement("div");
    bookingsInfo.classList.add("info");

    const bookingsLabel = document.createElement("span");
    bookingsLabel.textContent = "Purpose";
    const bookingsValue = document.createElement("span");
    bookingsValue.textContent = task.val4;

    bookingsInfo.appendChild(bookingsLabel);
    bookingsInfo.appendChild(bookingsValue);
    card.appendChild(bookingsInfo);

    // Buttons container
    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");

    // Call button
    const callBtn = document.createElement("button");
    callBtn.classList.add("call");
    callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

    // Message button
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg");
    msgBtn.textContent = "Message";

    // Append buttons
    buttonsDiv.appendChild(callBtn);
    buttonsDiv.appendChild(msgBtn);

    // Append buttonsDiv to card
    card.appendChild(buttonsDiv);

    // Finally, add the card to the DOM (for example, inside a container)
    document.querySelector(".stack").appendChild(card); // or any container of your choice
  });
}

showCards();


upButton.addEventListener("click",function(){

    let lastChild=stack.lastElementChild;
    if(lastChild){
         stack.insertBefore(lastChild,stack.firstElementChild);
    }
            
});
   
downButton.addEventListener("click",function(){

    let firstChild=stack.firstElementChild;
    if(firstChild){
         stack.appendChild(firstChild);
    }
     
});