let input = document.querySelector('#user-input');
let countClick = 0;


hideElement();

function submitInput(event, input) {

    if (event.keyCode === 13) {

        event.preventDefault();

        if (input.trim() === '') {

            return;
        }

        createNewElement(input);
        showItemsLeft()
        ClearInput();
        hideElement();

    }
}

function createNewElement(input) {

    let newTextElement = document.createElement('p');
    let newInputElement = document.createElement('input');
    let newDivElement = document.createElement('div');
    let newDeleteButton = document.createElement('button');

    newDivElement.setAttribute('id', 'input-container');
    newTextElement.setAttribute('class', 'text-content');
    newTextElement.setAttribute('name', 'todo')
    newInputElement.setAttribute('id', 'checkbox');
    newInputElement.type = 'checkbox';
    newInputElement.addEventListener('click', checkboxEvent);
    newDeleteButton.setAttribute('id', 'delete-button');
    newDeleteButton.onclick = deleteItem;
    newDeleteButton.textContent = '❌';


    newTextElement.textContent = input;
    newDivElement.appendChild(newDeleteButton);
    newDivElement.appendChild(newTextElement);
    newDivElement.appendChild(newInputElement);

    let listContainer = document.getElementById('list-Container');
    listContainer.appendChild(newDivElement);

}

function hideElement() {

    let selectParentElement = document.querySelector('#input-container');
    let hidebutton = document.getElementById('mark-all-button');
    let footerManu = document.querySelector('#footer-div');

    if (selectParentElement != null) {

        hidebutton.style.display = 'grid';
        hidebutton.style.gridArea = 'button';
        hidebutton.style.border = 'none';

        footerManu.style.display = 'grid';

    }
    else {

        hidebutton.style.display = 'none';
        footerManu.style.display = 'none';
    }

}

function ClearInput() {

    document.getElementById('user-input').value = '';

}

function deleteItem() {

    item = this.parentNode
    item.parentNode.removeChild(item)

    hideElement();
    showItemsLeft();

}

function markAllButton() {

    let getAllCheckboxes = document.querySelectorAll('#checkbox');

    let countCheckboxex = Array.from(getAllCheckboxes).filter(checkox => checkox.checked);

    if (getAllCheckboxes.length === countCheckboxex.length){

        for (let i = 0; i < getAllCheckboxes.length; i++) {

            getAllCheckboxes[i].checked = false;



            let changeTextContent = document.getElementsByName('todo')[i];
            changeTextContent.classList.remove(changeTextContent.classList[0]);
            changeTextContent.classList.add('text-content');

            
        }

    }
   else if(countCheckboxex.length < getAllCheckboxes.length ){

        for (let i = 0; i < getAllCheckboxes.length; i++) {

            getAllCheckboxes[i].checked = true;

            
            let changeTextContent = document.getElementsByName('todo')[i];
            changeTextContent.classList.remove(changeTextContent.classList[0]);
            changeTextContent.classList.add('checked-text-content');

           
        }

    }
    
    showItemsLeft()
}

function showTodos(a ,b) {


    let parentElement = document.querySelectorAll('#input-container');
    let completedArray;
    let activeArray;

    completedArray = Array.from(parentElement).filter(function (parentElement) {

        let checkbox = parentElement.querySelector('#checkbox');

        return checkbox.checked;

    });

    activeArray = Array.from(parentElement).filter(function (parentElement) {

        let checkbox = parentElement.querySelector('#checkbox');

        return checkbox.checked !== true;

    })

    for (i = 0; i < activeArray.length; i++) {

        activeArray[i].style.display = a;
    }

    for (i = 0; i < completedArray.length; i++) {

        completedArray[i].style.display = b;
    }

}

function checkboxEvent() {

    let getAllCheckboxes = document.querySelectorAll('#checkbox');


    for (let i = 0; i < getAllCheckboxes.length; i++) {

        if (getAllCheckboxes[i].checked === true) {

            let changeTextContent = document.getElementsByName('todo')[i];
            changeTextContent.classList.remove(changeTextContent.classList[0]);
            changeTextContent.classList.add('checked-text-content')
           
        }
        else {

            let changeTextContent = document.getElementsByName('todo')[i];
            changeTextContent.classList.remove(changeTextContent.classList[0]);
            changeTextContent.classList.add('text-content')
            
        }

    }

    showItemsLeft()

}

function clearCompleted() {

    let getAllCheckboxes = document.querySelectorAll('#checkbox');

    for (let i = 0; i < getAllCheckboxes.length; i++) {

        if (getAllCheckboxes[i].checked === true) {

            getAllCheckboxes[i].parentNode.remove();
        }
    }

    hideElement();
    showItemsLeft();
}

function showItemsLeft() {

    let parentElement = document.querySelectorAll('#input-container');
    let textElement = document.querySelector('#show-items-left');
    let newElementArray;
    let countItems = 0;

    newElementArray = Array.from(parentElement).filter(function (parentElement) {

        let checkbox = parentElement.querySelector('#checkbox');

        return !checkbox.checked;
    });


    if (newElementArray.length != 0) {

        for (let i = 0; i < newElementArray.length; i++) {

            countItems++;

            if (countItems <= 1) {

                textElement.textContent = countItems + ' item left';

            }
            else if (countItems > 1) {

                textElement.textContent = countItems + ' items left';
            }

        }

    }
    else if (newElementArray.length === 0) {

        textElement.textContent = countItems + ' items left';
    }

}




