const requestURL = 'https://annie127.github.io/wdd230/final-project/json/panglao-businesses.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      
        const business = jsonObject['businesses'];
        for (let i=0; i < businesses.length; i++) {

            let card = document.createElement('section');
            let div = document.createElement('div');
            let logo = document.createElement('img');
            let name = document.createElement('h4');
            let contact = document.createElement('p');
            let email = document.createElement('p');
            let website = document.createElement('p');

            image.setAttribute('src', `images/${business.logo}`);
            image.setAttribute('alt', `logo of ${business.name}`);
            div.className = 'business-info';
            name.textContent = `${business.name}`;
            contact.textContent = `${business.contactnumber}`;
            email.textContent = `${business.email}`;
            website.textContent = `${business.website}`;

            card.appendChild(div);

            div.appendChild(logo);
            div.appendChild(name);
            div.appendChild(contact);
            div.appendChild(email);
            div.appendChild(website);

            document.querySelector('.business-cards').appendChild(card);

          }
         }
        )
   
