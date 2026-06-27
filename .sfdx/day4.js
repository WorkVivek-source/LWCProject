console.log("1");

console.log("Hello 1");

console.log("Hello 2");
console.log("Hello 3");

setTimeout(()=>{
    console.log("Hello 4");
},2000);

console.log("Hello 5");

//callback function


function KuchDerMaiChalunga(fnc){
    setTimeout(fnc,5000);
}

KuchDerMaiChalunga(function(){
    console.log("Hey Vivek");
})


function ProfileLeKarAao(username,cb){
    setTimeout(()=>{
        console.log(`Profile Fetched Successfully for ${username}`)
        cb({userid:122987,username,age:27,Compant:"ClodKaptan"});
    },2000);
}

function SarePostLeKarAao(userId,fn){
    setTimeout(()=>{
         console.log(`Post Fetched Successfully for ${userId}`)
        fn({post1:'Welcome to salesforce',post2:"Welcome to js tutorial"});
    },2000);
}

ProfileLeKarAao("Harsh",function(profileData){
     console.log(profileData);
    SarePostLeKarAao(profileData.userid,function(posts){
        console.log(posts);
    });
        SavedPostNiaklo(profileData.userid,function(){

        });
});


let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if(rn>5) res({resoved:rn}); 
        else rej({rejected:rn});
    },3000);
});

pr.then(function(val){
    console.log(val);
}).catch(function(val){
     console.log(val);
})


async function abcd(){
    try{
        let xyz=await pr;
        console.log(xyz);
    }catch(e){
        console.log(e);
    } 
}

abcd();