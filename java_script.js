
const newyear="1 Jan 2021 ";


function countdown()
{

    const day = document.getElementById('days'); 
    const hour = document.getElementById('hours'); 
    const min = document.getElementById('mins'); 
    const second = document.getElementById('seconds'); 
    


    const newYearDate = new Date(newyear);
    const currentDate =new Date();

    const total_seconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(total_seconds / 3600 / 24);

    const hours = Math.floor(total_seconds / 3600 ) % 24;


    const mins = Math.floor(total_seconds / 60 ) % 60;

    const seconds = Math.floor(total_seconds) % 60;

   


   day.innerHTML = days;
   hour.innerHTML = hours;
   min.innerHTML = mins;
   second.innerHTML = seconds;

}



setInterval(countdown,1000);
countdown();