let person=document.getElementsByClassName("person");
let quote=document.getElementsByClassName("quote");
let btn=document.getElementsByClassName("newquote");              

let text=[
    {  quote:` "Life is what happens when you are busy making other plans."`,
       person:"John Lennon" },
    {  quote:` "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
       person:"Ralph Waldo Emerson" },
    {  quote:`"The future belongs to those who believe in the beauty of their dreams."`,
       person:"Eleanor Roosevelt" },
];
btn[0].addEventListener("click",function(){

    let random=Math.floor(Math.random() * text.length);
    quote[0].innerText=text[random].quote;
    person[0].innerText=text[random].person;

});



/* we could also have used getElementById or querySelector but since we have used ByClassName which returns an array of elements having that classname
 so we will have to use [0] to access the first element having that class also there is only one element for each class so no element at any other index 
 but that was not required with ById or querySelector */