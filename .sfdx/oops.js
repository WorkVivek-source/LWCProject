//Constructor FUnction - So its best practise to use function name in CamelCase
function CreatePencil(name,price,color,company){
   this.name=name;
   this.price=price;
   this.company=company;
   this.color=color;
   this.writePencil=function(text){
    console.log('vivek'+this.name);
    let h4=document.createElement("h4");
    h4.textContent=text;
    h4.style.color=color;
    document.body.appendChild(h4);
   };
}

let pencil1=new CreatePencil('Apsara',7,'black','Natraj');
let penciil2=new CreatePencil('Doms',8,'red','Natraj');
let pencil3=new CreatePencil('Tarzan',6,'blue','Natraj');
let pencil4=new CreatePencil('Fantasy',12,'green','Natraj');