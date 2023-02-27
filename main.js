let input = document.querySelector('#user-input');
let inputsection = document.querySelector('#user-section');
let list = document.querySelector('#todo-list');
let todo = document.querySelector('#input-div');
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
    newTextElement.setAttribute('id', 'text-content');
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

    countClick++;

    if (countClick === 1) {

        for (let i = 0; i < getAllCheckboxes.length; i++) {

            getAllCheckboxes[i].checked = true;

            let changeTextContent = getAllCheckboxes[i].parentElement.querySelector('#text-content');
            changeTextContent.style.textDecoration = 'line-through';
        }

    }
    else if (countClick === 2) {

        for (let i = 0; i < getAllCheckboxes.length; i++) {

            getAllCheckboxes[i].checked = false;

            let changeTextContent = getAllCheckboxes[i].parentElement.querySelector('#text-content');
            changeTextContent.style.textDecoration = 'none';


        }

        countClick = 0;
    }


}

function showCompleted() {



   
    let parentElement = document.querySelectorAll('#input-container');
    let completedArray;
    let activeArray;

    completedArray = Array.from(parentElement).filter(function(parentElement){

        let checkbox = parentElement.querySelector('#checkbox');

        return checkbox.checked;

    });

    activeArray = Array.from(parentElement).filter(function(parentElement){

        let checkbox = parentElement.querySelector('#checkbox');

        return checkbox.checked !== true;

    })

    for( i = 0; i < activeArray.length; i++){

        activeArray[i].style.display = 'none';
    }

    for(i = 0; i < completedArray.length; i++){

        completedArray[i].style.display = 'grid';
    }


}

function checkboxEvent() {

    let getAllCheckboxes = document.querySelectorAll('#checkbox');


    for (let i = 0; i < getAllCheckboxes.length; i++) {

        if (getAllCheckboxes[i].checked === true) {

            let changeTextContent = getAllCheckboxes[i].parentElement.querySelector('#text-content');
            changeTextContent.style.textDecoration = 'line-through';
            changeTextContent.style.color = '#4d4d4d50';
        }
        else {

            changeTextContent = getAllCheckboxes[i].parentElement.querySelector('#text-content');

            changeTextContent.style.textDecoration = 'none';
            changeTextContent.style.color ='#4d4d4d';
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
    else if(newElementArray.length === 0){

        textElement.textContent = countItems + ' items left';
    }

}

function showActive(){

    

    let parentElement = document.querySelectorAll('#input-container');
    let completedArray;
    let activeArray;

    completedArray = Array.from(parentElement).filter(function(parentElement){

        let checkbox = parentElement.querySelector('#checkbox');

        return checkbox.checked;

    });

    activeArray = Array.from(parentElement).filter(function(parentElement){

        let checkbox = parentElement.querySelector('#checkbox');

        return checkbox.checked !== true;

    })

    for( i = 0; i < activeArray.length; i++){

        activeArray[i].style.display = 'grid';
    }

    for(i = 0; i < completedArray.length; i++){

        completedArray[i].style.display = 'none';
    }
}

function showAll(){

    let parentElement = document.querySelectorAll('#input-container');
   

    for( i = 0; i < parentElement.length; i++){

        parentElement[i].style.display = 'grid';
    }

   
}

