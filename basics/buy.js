let container=document.getElementById("container");

container.innerHTML="<button id='shop-btn'>BUY!</button>";

let shopBtn=document.getElementById("shop-btn");

shopBtn.addEventListener("click",function(){

    container.innerHTML += "<p>thankyou for the purchase!</p>";
});


// template strings/literals

const recipient = "James";
const sender = "Per Harald Borgen";

// Break the email string into multiple lines ; will be printed out in the exact format with newlines and indented spaces (not in a simply single line)
const email = `
               Hey ${recipient}! 
               How is it going?                 
               Cheers ${sender}
              `

console.log(email);