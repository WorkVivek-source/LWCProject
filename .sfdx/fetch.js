
console.log("1");

function loadRandomUser(){
    fetch("https://reqres.in/api/users",{
        method:"GET",
    }).then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log(data);
    });
}

loadRandomUser();

async function loadRandomUser2(){
    const res= await fetch("https://reqres.in/api/users",{
        method:"GET",
        headers:{
            "x-api-key": "free_user_3FJdfC239neDql9q7ZiTGjPq81R",
    }});
    const data= await res.json();
    console.log(data.data[1].first_name);
}
loadRandomUser2();

async function getRandomCatImage(){
    try{
        const res=await fetch("https://api.thecatapi.com/v1/images/search");
        const data=await res.json();
        console.log(data);
        let img=document.querySelector(".cat_image");
        console.dir(img);
        //img.setAttribute("src",data[0].url);
        img.src=data[0].url;
    }catch(error){
        console.log(error);
    }
}

getRandomCatImage();


async function xyz(){
    let x=await fetch("https://rest.coinapi.io/v1/exchangerate/BTC/USD",{
        method:"GET",
        headers:{
            "Authorization":"b0e9d9e0-1932-44e2-ac51-a46b13f1bf96",
        },
    });
    let y=await x.json();
    console.log(y);
}
xyz();