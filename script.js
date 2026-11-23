


function updateClock() 
{
    const clockElement = document.getElementById('clock');

    if (clock)
    {
        clock.textContent = new Date().toLocaleTimeString();
    }
}
updateClock();
setInterval(updateClock, 1000);
