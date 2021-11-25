
// Preston

const urlPreston = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(urlPreston)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonPreston) {
    
      const towns = jsonPreston['towns'];
      const townPreston = towns.filter((towns) => towns.name === 'Preston');
   
      townPreston.forEach((xPreston) => {
        document.getElementById('preston-events').innerHTML = `${xPreston.events.join('<br>')}`;
        
      });

  });





