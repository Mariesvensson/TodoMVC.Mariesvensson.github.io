let input = document.querySelector('#user-input');
let inputsection = document.querySelector('#user-section');
let list = document.querySelector('#todo-list');
let todo = document.querySelector('#input-div');
let countClick = 0;

checkInput();

function submitInput(event, input) {

    if (event.keyCode === 13) {

        event.preventDefault();

        if (input.trim() === '') {

            return;
        }

        createNewElement(input);
        ClearInput();
        checkInput();

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

function checkInput() {

    let selectParentElement = document.querySelector('#input-container');
    let hidebutton = document.getElementById('mark-all-button');


    if (selectParentElement != null) {

            hidebutton.style.display = 'grid';
            hidebutton.style.gridArea = 'button';
            hidebutton.style.border = 'none';

    }
    else {

        hidebutton.style.display = 'none';
    }
   
}
  
function ClearInput() {

    document.getElementById('user-input').value = '';

}

function deleteItem() {

    let item = this.parentNode;
    item.parentNode.removeChild(item)

    checkInput();
}

function markAllButton() {

    let getAllCheckboxes = document.querySelectorAll('#checkbox');

    countClick++;

    if(countClick === 1){

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
    }


    

   

}

function showCompleted(){

    // gör färdigt detta 
    
    let getParentElement = document.querySelector('#input-container');
    let getCheckboxes = getParentElement.querySelector('#checkbox');

    for (let i = 0; i < getParentElement.length; i++) {

        if(getCheckboxes[i].checked === true){

            return;
        }
        else if (getCheckboxes[i].checked === false){

            getParentElement.style.display = 'none';

        }

    }


}

