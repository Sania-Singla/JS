// let firstCard = getRandomCard();
// let secondCard = getRandomCard();       // so that game start hone se pehle hi na card select ho jaye   
let cards=[];
let sum = 0 ;
let hasBlackJack = false;
let isAlive = false;   //haven't evenstarted the game yet
let message;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");

let player={               //object
    name : "sania",
    chips : 145
};

let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;


function getRandomCard()
{
    if( ( randomNumber = Math.floor( Math.random()*13 ) + 1 ) ===1)
    {
        return 11;
    }
    else if( ( randomNumber = Math.floor( Math.random()*13 ) + 1 ) === 11 || ( randomNumber = Math.floor( Math.random()*13 ) + 1 ) === 12 || ( randomNumber = Math.floor( Math.random()*13 ) + 1 ) === 13 )
        //or use ( randomNumber = Math.floor( Math.random()*13 ) + 1 )  > 10
    {
        return 10;
    }
    else
    {
        return randomNumber;
    }
}

function startGame()
{
    isAlive=true;
    cards[0]=getRandomCard();
    cards[1]=getRandomCard();
    sum=cards[0]+cards[1];
    renderGame();
}
function renderGame()
{
    sumEl.textContent = "sum: "+sum;
    // cardsEl.textContent ="cards: "+ cards[0] + " " + cards[1];
    cardsEl.textContent ="cards: ";
    for(let i=0;i<cards.length;i++)
        {
            cardsEl.textContent+=cards[i]+" ";
        }
    if (sum <= 20) 
    {
        message="Do you want to draw a new card? ";
        isAlive=true;
    } 
    else if (sum === 21) 
    {
        message="Wohoo! You've got Blackjack! ";
        hasBlackJack = true;
        isAlive=false;
    } 
    else 
    {
        message="You're out of the game! ";
        isAlive = false;
    }
    messageEl.textContent=message;
}

function newCard()
{
    if(isAlive===true && hasBlackJack===false)
    {
        let card=getRandomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}


/* Math.ramdom()*x generates a random no. between 0 -> close to x (x-1.99999)
ex: Math.random()*3   generates a random No. between 0 -> 2.9999 
Math.floor(x) it does something with that number & return a new number ( with +ve numbers it just removes the decimal places and return the remaining part)
Math.floor(Math.random()*6) will give random no. between possibilities 0,1,2,3,4,5
to convert in to a range of 1,2,3,4,5,6 jsut use => Math.floor(Math.random()*6) + 1
*/