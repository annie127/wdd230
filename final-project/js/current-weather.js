
var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=9.5825&lon=123.7503&exclude=minutely,hourly&units=metric&appid=b6c1c51b1d5777e0fb30bce42d0a87d6';

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

