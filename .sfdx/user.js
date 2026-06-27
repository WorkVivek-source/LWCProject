console.log("1");
let form=document.querySelector("form");
let userName=document.querySelector("#name");
let role=document.querySelector("#role");
let bio=document.querySelector("#bio");
let photo=document.querySelector("#photo");
const userManager={
    user: [],
    init: function(){
       // this.showUser();
        form.addEventListener("submit",this.submitForm.bind(this))
    },
    submitForm : function(event){
        event.preventDefault();
        console.log(this);
        this.addUser();
    },
    addUser : function(){
        this.user.push({userName:userName.value,
            role:role.value,
            bio:bio.value,
            photo:photo.value,
        });
        form.reset();
        console.log('Vivek' + this.user.userName);
        this.showUser(this.user.at(-1));
    },
    showUser : function(user){
            let div=document.createElement("div");
            div.className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

            let img=document.createElement("img");
            img.className= "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-200 shadow";
            img.setAttribute('src',user.photo);
            img.setAttribute('alt','User Photo');
            div.appendChild(img);

            let h2=document.createElement("h2");
            h2.className="text-2xl font-bold mb-1 text-blue-700";
            h2.textContent=user.userName;
            div.appendChild(h2);

            let role=document.createElement("p");
            role.className="text-purple-500 mb-2 font-medium";
            role.textContent=user.role;
            div.appendChild(role);

            let desc=document.createElement("p");
            desc.className="text-gray-700 text-center";
            desc.textContent=user.bio;
            div.appendChild(desc);

            document.querySelector(".users").appendChild(div);

            div.addEventListener("click",this.removeUser.bind(this,div,user))

    },
    removeUser : function(element,user){
       this.user= this.user.filter((item)=>{
            return item!=user
        });
       element.remove();
    }
}

userManager.init();