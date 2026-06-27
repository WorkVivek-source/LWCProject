// let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });
function beforeSubmit(event){
    event.preventDefault();
    dateValue=document.querySelector("#date").value;
    console.log(dateValue);
    let formattedDate=new Date(dateValue).toLocaleDateString("en-IN");
    document.querySelector(".Lead_Date__c").value=formattedDate;
    console.log(document.querySelector(".Lead_Date__c").value);
    document.querySelector("form").submit();
}
