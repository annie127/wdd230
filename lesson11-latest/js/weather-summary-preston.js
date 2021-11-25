
// Weather summary for Preston

var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=acc0c305e326e6d9f1226a549bc67124';

fetch(apiUrl)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('description').style.textTransform = "capitalize";
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed.toFixed(0);
  });


// Windchill Preston
  
let temp = parseFloat(document.querySelector('#temp').textContent);
let speed = parseFloat(document.querySelector('#speed').textContent);

let windchill;
if (temp <= 50 && speed > 3) {
    f = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16))+ (0.4275 * temp * (speed ** 0.16));
    windchill = `${f.toFixed(0)} \u00B0F`;
}
else {
    windchill = 'N/A';
}

document.querySelector('#wind').textContent = windchill;

