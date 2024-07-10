let btn=document.getElementById("get-a-fact");
let fact=document.getElementById("fact");

let url="https://cat-fact.herokuapp.com/facts";
btn.addEventListener("click",function(){

    fetch(url).then( (result)=>{

        return result.json();

    } ).then( (result2)=>{

        fact.innerText=result2[3].text;

    });


});