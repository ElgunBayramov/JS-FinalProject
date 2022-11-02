let addTask=document.querySelector(".circle");
let lists=document.querySelector(".lists");
let input=document.querySelector(".text");
let reversebtn=document.querySelector('.buttondown');
let sortbtn=document.querySelector('.buttonup');

let array=[];
addTask.onclick=function(){
    if(input.value.length==0){
        alert("Xana boş buraxıla bilməz")
    }
    else{
        
        lists.innerHTML += `
        <div class="task">
           ${input.value}    
            <div class="button2">
            <img src="/images/Group 56.png">
           
        </div>
        </div>

    `;
    let removelist = document.querySelectorAll(".button2");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}
    
}
    let boolean=true;
    sortbtn.addEventListener("click", (e) => {
     let taskSort = [...document.querySelectorAll(".lists .task")]
      .map((task) => task.innerHTML)
      .sort();
       
     
    if (boolean) {
    
    document.querySelectorAll(".lists > .task").forEach((item, i) => {
        item.innerHTML=taskSort[i];
        item.innerHTML+= ``;
    let removelist = document.querySelectorAll(".button2");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
    });
}

    });
    reversebtn.addEventListener("click", (e) => {
        let taskSort = [...document.querySelectorAll(".lists .task")]
         .map((task) => task.innerHTML)
         .sort().reverse();
       if (boolean) {

       
       document.querySelectorAll(".lists > .task").forEach((item, i) => {
           item.innerHTML=taskSort[i];
           item.innerHTML+= ``;
    let removelist = document.querySelectorAll(".button2");
    for(let i=0; i<removelist.length; i++){
        removelist[i].onclick = function(){
            this.parentNode.remove();
        }
    }
        });
    }
   
});

 
       
















// let changer=true;
// function arraysort(){
//     let arr=[]
//     if(changer==true){
//         document.querySelectorAll(".lists >.task").forEach((item)=>{
//             arr.push(item.innerText)
//         })
//         console.log(arr);
//         let newarr=arr.sort((a,b)=>a.innerText>b.innerText ? 1 :-1);
//         lists.append(...newarr);
//         changer=false
//     }
//     else if(changer==false){
//         let arr=[]
//         document.querySelectorAll(".lists >.task").forEach((item)=>{
//             arr.push(item.innerText)
//         })
//         console.log(arr)
//         let newarr=arr.sort((a,b)=>a.innerText<b.innerText ? 1 : -1);
//         lists.append(...newarr);
//         changer=true
//     }
// }


// sortbtn.addEventListener("click",arraysort)



          








