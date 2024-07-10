let num1=2;
document.getElementById("num1").textContent=num1;
let num2=4;
document.getElementById("num2").textContent=num2;
let result=document.getElementById("result");

function add()
{
    result.textContent="result:";
    result.textContent+=num1+num2;
}
function subtract()
{
    result.textContent="result:";
    result.textContent+=num1-num2;
}
function multiply()
{
    result.textContent="result:";
    result.textContent+=num1*num2;
}
function divide()
{
    result.textContent="result:";
    result.textContent+=num1/num2;
}


