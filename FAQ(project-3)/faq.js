let content=document.getElementsByClassName("content");

for(let i=0;i<content.length;i++)
{
    content[i].addEventListener("click",function(){
        this.classList.toggle("active");
    });
}