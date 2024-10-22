let input=document.getElementById("input");
// let plusBtn=document.getElementById("plus-btn");
let form = document.getElementById("form");
let itemsContainer=document.getElementById("items-container");

// plusBtn.addEventListener("click",function(){
function handleClick(e){
    e.preventDefault();
    let item=document.createElement("div");
    item.classList.add("item");

    let li=document.createElement("li");
    li.classList.add("list-item");
    li.innerText=`${input.value}`;
    item.appendChild(li);

    let tickBtn=document.createElement("button");
    tickBtn.classList.add("tick-btn");
    tickBtn.innerHTML=`<i class="fa-solid fa-check" id="tick"></i>`;
    item.appendChild(tickBtn);

    let dustbinBtn=document.createElement("button");
    dustbinBtn.classList.add("dustbin-btn");
    dustbinBtn.innerHTML=`<i class="fa-solid fa-trash-can" id="dustbin"></i>`;
    item.appendChild(dustbinBtn);

    if(input.value==="")
    {
        alert("enter a task!");
    }
    else
    {
        itemsContainer.appendChild(item);
        input.value='';
    }
    
    tickBtn.addEventListener("click",function(){

        li.style.textDecoration="line-through";

    });

    dustbinBtn.addEventListener("click",function(){

        item.remove();

    });

    /* we needed to declare these two event handlers inside of + event handler because
     we have created the elements inside of this scope so the meaning of the check and dustbin button 
     is only defined in this scope */ 
    /*and also if we define them outside then how will we specify that for which input the tick or dustbin button was clicked*/
};







 