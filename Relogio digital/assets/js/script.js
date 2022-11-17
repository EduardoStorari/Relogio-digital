const hours = document.getElementById('Hours')
const Minutes = document.getElementById('Minutes')
const Seconds = document.getElementById('Seconds')  

const watch = setInterval(function time(){
    let dateToday = new Date();
    let Hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if(Hours < 10) Hours = '0' + Hours;

    if(minutes< 10) minutes = '0' + minutes;

    if(seconds < 10) seconds = '0' + seconds;

    hours.textContent = Hours
    Minutes.textContent = minutes
    Seconds.textContent= seconds
    
})