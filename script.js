// let addData=document.querySelector("#addData")
// let removeData=document.querySelector("#removeData")
// let counter=document.querySelector("#counter")
// let resetData=document.querySelector("#resetData")

// let count=0;
// addData.addEventListener("click",()=>{
//     count++;
//     counter.textContent = count;
// })
// removeData.addEventListener("click",()=>{
//    if(count>0){
//     count--;
//     counter.textContent=count
//    }false
// })

// resetData.addEventListener("click",()=>{
//  count=0;
//  counter.textContent=count
// })


let counter=document.querySelector("#counter")
let removeData=document.querySelector("#removeData")
let addData=document.querySelector("#addData")
let resetData=document.querySelector("#resetData")

let count=0

addData.addEventListener("click" , ()=>{
    count++;
    counter.textContent=count
})

removeData.addEventListener("click",()=>{
 if(count>0){
    count--;
    counter.textContent=count
 }false
})

resetData.addEventListener("click",()=>{
    count=0;
    counter.textContent=count
})