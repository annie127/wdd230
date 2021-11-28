
// Preston weather summary

var apiPreston = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=acc0c305e326e6d9f1226a549bc67124';

fetch(apiPreston)
  .then((response) => response.json())
  .then((jsObject) => {
    
    document.getElementById('currentPreston').textContent = jsObject.main.temp.toFixed(0);
    document.getElementById('descriptionPreston').textContent = jsObject.weather[0].description;
    document.getElementById('descriptionPreston').style.textTransform = "capitalize";
    document.getElementById('highPreston').textContent = jsObject.main.temp_max.toFixed(0);
    document.getElementById('humidityPreston').textContent = jsObject.main.humidity;
    document.getElementById('speedPreston').textContent = jsObject.wind.speed.toFixed(0);
  });

  



  
