
var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=9.5825&lon=123.7503&exclude=minutely,hourly&units=metric&appid=3a67fda6cacce3953a8654a8c414649c';

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {

    const myTemp = jsObject.current.temp.toFixed(0);
    const myDescription = jsObject.current.weather[0].description;
    const myHumidity = jsObject.current.humidity;

    document.getElementById("temp").textContent = myTemp;
    document.getElementById("description").textContent = myDescription;
    document.getElementById("description").style.textTransform = "capitalize";
    document.getElementById("humidity").textContent = myHumidity;

  });

