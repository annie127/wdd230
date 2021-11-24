const urlSoda = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(urlSoda)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonSoda) {
    
      const towns = jsonSoda['towns'];
      const townSoda = towns.filter((towns) => towns.name === 'Soda Springs');
   
      townSoda.forEach((xSoda) => {
        document.getElementById('soda-events').innerHTML = `${xSoda.events.join('<br>')}`;
        
      });

  });