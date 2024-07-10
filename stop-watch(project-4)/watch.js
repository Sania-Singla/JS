let startStopBtn=document.getElementById("start-stop-btn");
let resetBtn=document.getElementById("reset-btn");
let timer=document.getElementById("counting");


let timerStatus="stopped";
let timerInterval=null;

let minutes=0;
let hours=0;
let seconds=0;

// for leading zeroes
let leadingSeconds=0;
let leadingMinutes=0;
let leadingHours=0;


function stopWatch()
{
    seconds++;
    if(seconds===60)
    {
        minutes++;
        seconds=0;
        if(minutes===60)
        {
            hours++;
            minutes=0;
        }
    }
    
    //for leading zeroes
    if(seconds<10)
    {
        leadingSeconds="0"+seconds;
    }
    else
    {
        leadingSeconds=seconds;
    }
    if(minutes<10)
    {
        leadingMinutes="0"+minutes;
    }
    else
    {
        leadingMinutes=minutes;
    }
    if(hours<10)
    {
        leadingHours="0"+hours;
    }
    else
    {
        leadingHours=hours;
    }
    

    timer.innerText=`${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

// let timerInterval=setInterval(stopWatch,1000);     we dont want to start the timer on refresh so we will assign this setinterval on click and then also remove it 
startStopBtn.addEventListener("click",function(){

    if(timerStatus==="stopped")
    {
        startStopBtn.innerHTML=`<i class="fa-solid fa-pause"  id="pause"></i>`;
        timerStatus="started";
        timerInterval=setInterval(stopWatch,1000);     //1000ms = 1s 
    }
    else
    {
        clearInterval(timerInterval);
        startStopBtn.innerHTML=`<i class="fa-solid fa-play"   id="start"></i>`;
        timerStatus="stopped";
    }
});

resetBtn.addEventListener('click', function(){

    startStopBtn.innerHTML=`<i class="fa-solid fa-play"  id="start"></i>`;
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    timer.innerText = "00:00:00";

});