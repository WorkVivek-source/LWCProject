console.log(1);

let form=document.querySelector("form");
let inputs=document.querySelectorAll("input");
console.log(inputs);
form.addEventListener("submit",function(eve){
            eve.preventDefault();
        // console.log(inputs);
            //img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQitaJfLtHRrTev8RvJSgckdKu6IOyTNMdw&s");
        let divCard=document.createElement("div");
        divCard.classList.add("card");
        let profileDiv=document.createElement("div");
        profileDiv.classList.add("profile");
        divCard.appendChild(profileDiv);
        console.log(divCard);
        let img=document.createElement("img");
        //img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQitaJfLtHRrTev8RvJSgckdKu6IOyTNMdw&s");
        profileDiv.appendChild(img);
        let h41=document.createElement("h4");
        let h42=document.createElement("h4");
        let h43=document.createElement("h4");
        profileDiv.appendChild(h41);
        profileDiv.appendChild(h42);
        profileDiv.appendChild(h43);
        let p=document.createElement("p");
        profileDiv.appendChild(p);
        console.log(profileDiv);
            h41.textContent=inputs[0].value;
            h42.textContent=inputs[1].value;
            h43.textContent=inputs[2].value;
            p.textContent=inputs[3].value;
            img.setAttribute("src",inputs[4].value);
            document.querySelector("body").appendChild(divCard);

            inputs.forEach(function(val){
                if(val.type!=="submit"){
                    val.value="";
                }
            });
});
