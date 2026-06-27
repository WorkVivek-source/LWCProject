function generateDocument(message){
    return new Promise((res,rej)=>{
        if(!message){
            rej('Promise Rejected : Message is Empty');
        }
        else{
            setTimeout(()=>{
                console.log(message);
                res('Hello Babu');
            },3000);
        }
    });
}

/*generateDocument('Hi Baby').then(()=>{
    console.log('Resolved');
   generateDocument('How Are You'); // kuch retun nhi toh undefined return hota yha
}).then(()=>{
    console.log('Prmoise Resolved');
    generateDocument();
}).catch((err)=>{
    console.log(err);
    throw err;
    // implicit return here undefined return so promise resolved again amd .then will run again
})*/



async function xyz(){
    try{
        const x= await generateDocument('Hi Baby');
        console.log(x);
    }catch(err){

    }
}

xyz()
.then((data)=>{
    console.log(data)
})


function resolveTimeout(value,delay){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej(value);
        },(delay*1000));
    });
}

function rejectTimeout(value,delay){
     return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(value);
        },(delay*1000));
    });
}

async function load(){
    const allPromise=Promise.race([resolveTimeout('Welcome To TCS',2),rejectTimeout('lOADING fAILED',3)]);
    try{
        const values=await allPromise;
        console.log('value'+values);
    }catch(err){
        console.log(err);
    }
}

load();
