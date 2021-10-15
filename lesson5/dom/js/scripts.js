const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', function() {

    const listItem = document.createElement('li');
    const listButton = document.createElement('button');

    listItem.textContent = input;
    listButton.textContent = '❌';

    listItem.appendChild(listButton);
    list.appendChild(listItem);
    
    listButton.onclick = function(e) {
        list.removeChild(listItem);

    }
    
    input.focus();
    input.value = '';

}

)
