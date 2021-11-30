

const urlFish = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(urlFish)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonFish) {
    
      const towns = jsonFish['towns'];
      const townFish = towns.filter((towns) => towns.name === 'Fish Haven');
   
      townFish.forEach((xFish) => {
        document.getElementById('fish-haven-events').innerHTML = `${xFish.events.join('<br>')}`;
        
      });

  });

