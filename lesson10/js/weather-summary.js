var apiURL = '//api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=acc0c305e326e6d9f1226a549bc67124'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    document.getElementById('current').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('description').textContent = jsObject.weather[0].description;
    document.getElementById('description').style.textTransform = "capitalize";
    document.getElementById('high').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;
  });

  
