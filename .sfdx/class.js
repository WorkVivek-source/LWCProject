class CreatePencil{
    constructor(name,price,color,company){
        this.name=name;
        this.price=price;
        this.company=company;
        this.color=color;
        this.role='Users';
    }
    erase(){
        let color1=this.color;
        document.querySelectorAll("h4").forEach(function(ele){
            console.log(ele);
            console.log(this);
            if(ele.style.color==color1){
                document.body.removeChild(ele);
            }
        });
    }
    write(text){
        let h4=document.createElement("h4");
        h4.textContent=text;
        h4.style.color=this.color;
        document.body.appendChild(h4);
    }
    checkRole(){
        return `MY ROLE IS ${this.role}`;
    }
}
//classical Inheritance
class Admin extends CreatePencil{
    constructor(name,price,color,company){
        super(name,price,color,company);
        this.role='Admin';
    }
    remove(){
        document.querySelectorAll("h4").forEach((ele)=>{
            ele.remove();
        });
    }
}

let pencil1=new CreatePencil('Apsara',7,'black','Natraj');
let pencil2=new CreatePencil('Doms',8,'red','Natraj');
let pencil3=new CreatePencil('Tarzan',6,'blue','Natraj');
let pencil4=new CreatePencil('Fantasy',12,'green','Natraj');
let admin1=new Admin('Fantasy',12,'Blue','Natraj');
