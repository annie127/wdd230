//ADD the key and change units to imperial
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=3245&appid=acc0c305e326e6d9f1226a549bc67124"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    const icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";

    document.getElementById('weather_icon').src = icon_path
    

 }); //end of "then" fat arrow function


 // get today's day

