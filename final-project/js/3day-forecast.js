
//Get the days of the week
const d = new Date();
const daysShort = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<3; i++){
        document.getElementById("day" + (i+1)).innerHTML = daysShort[CheckDay(i)];
    }



//Get the temperatures, icons and description for the next 5 days

var forecastAPI = 'https://api.openweathermap.org/data/2.5/onecall?lat=9.5825&lon=123.7503&exclude=minutely,hourly&units=metric&appid=3a67fda6cacce3953a8654a8c414649c';

fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsObject) => {
      
      for (i = 0; i < 3; i++) {
          const desc = jsObject.daily[i].weather[0].description;
          document.getElementById("day" + (i+1) + "Temp").textContent = jsObject.daily[i].temp.day.toFixed(0); // temperature
          document.getElementById("img" + (i+1)).src = "https://openweathermap.org/img/wn/" + jsObject.daily[i].weather[0].icon + '@2x.png'; // icons
          document.getElementById("img" + (i+1)).setAttribute('alt', desc); // description
    }

});
