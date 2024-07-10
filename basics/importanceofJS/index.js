const imgs = [
    "hip1.jpg",
    "hip2.jpg",             // wo we will not have to modify the html evverytime wants to add a new employee photo to the DOM
    "hip3.jpg",
    "myphoto.jpg"
]

let container=document.getElementById("container");
function renderimages()
{
    let imagesList="";
    for(let i=0;i<imgs.length;i++)
        {
            imagesList +=`<img class='team-img' src=${imgs[i]}>`;
        }
    container.innerHTML=imagesList;         //didn't include in the loop becuase manipulating DOM every single time comes at a cost
}

renderimages();