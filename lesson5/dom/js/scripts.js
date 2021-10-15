const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click', function() {

    const listItem = document.createElement('li');
    const delButton = document.createElement('button');  

    listItem.textContent = input;
    delButton.textContent = '❌';

    listItem.appendChild(delButton);
    list.appendChild(listItem);

    delButton.onclick = function(e) {
        list.removeChild(listItem);

    }
    
    input.focus();
    input.value = '';

}

)
