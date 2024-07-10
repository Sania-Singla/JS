let modelBtn=document.getElementById("model-btn");
let modelContainer=document.querySelector(".model-container");
let cross=document.querySelector(".cross");


cross.addEventListener("click",function(){

    modelContainer.style.display="none";

});

addEventListener("click",function(e){    // or apply on window node (by default on that)

    if(e.target === modelContainer)
        {
            modelContainer.style.display="none";
        }
});

modelBtn.addEventListener("click",function(){

    modelContainer.style.display="block";

});