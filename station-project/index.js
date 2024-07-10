let count=document.getElementById("count");
let countVar=0;
function increment()
{
    countVar++;
    document.getElementById("count").textContent=countVar;
}

let record=document.getElementById("record");

function save()
{
    record.textContent += countVar + " - ";     //but the spaces are not working the way we want them to be so use node.textContent(more up-to-date property)
    countVar=0;
    count.textContent=0;
}



