let timer;
let minutes=15; /*by default set as 15*/
let seconds=0;
let isPaused=false;
let enteredTime=null;
function startTimer()
{
    timer=setInterval(updateTimer,1000);/*1000=1s*/

}
function updateTimer()
{
    const timerElement=document.getElementById('timer');
        timerElement.textContent=formatTime(minutes,seconds);

    if(minutes===0 && seconds===0)
        {
            clearInterval(timer);
            /*inbuilt function to clear timerinterval*/
            alert('Time is up!Take a break');
            chooseTime();
        }
        else if(!isPaused)//if timer is not paused
            {
                if(seconds>0)
                    {
                        seconds--;//to decrese the time
                    }
                    else{
                        seconds=59;
                        minutes--;
                        //to reduce 1 minute if timer of seconds reaches 0
                    }
            }
}
function formatTime(minutes,seconds)
{
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
    //to set the minues and seconds in 2 decimal format-padStart
}
function togglePauseResume()
{
    const pauseResumeButton=document.querySelector('.control-buttons button');
    //slects the first button that matches css
    isPaused= !isPaused;
    if(isPaused)
        {
            clearInterval(timer);
            
            
            pauseResumeButton.textContent='Resume';
            //this is html property which changes the textname after 
            //it goes to specified id in html 
        }
        else
        {
            startTimer();
            pauseResumeButton.textContent='Pause';
        }
}
function restartTimer()
{
    clearInterval(timer);
    minutes=enteredTime||15;
    //take input or else if not input provided take it as 15
    seconds=0;
    isPaused=false;
    const timerElement=document.getElementById('timer');
        timerElement.textContent=formatTime(minutes,seconds);
        const pauseResumeButton=document.querySelector('.control-buttons button');

        pauseResumeButton.textContent='Pause';
        startTimer();
    

}
function chooseTime()
{
    const newTime=prompt('Enter new time in minutes:');
    if(!isNaN(newTime)&& newTime>0)
        //isNan -to check legally valid input or not
        {
            enteredTime=parseInt(newTime);
            minutes=enteredTime;
            seconds=0;
            isPaused=false;
            const timerElement=document.getElementById('timer');
            timerElement.textContent=formatTime(minutes,seconds);
            
            clearInterval(timer);
            const pauseResumeButton=document.querySelector('.control-buttons button');
            pauseResumeButton.textContent='Pause';
            startTimer();

        }
        else{
            alert('Invalid input');
        }
}

startTimer();