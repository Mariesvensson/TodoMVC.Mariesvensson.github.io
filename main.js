let input = document.querySelector('#user-input')
let inputsection = document.querySelector('#user-section')
let list = document.querySelector('#todo-list')

let todo = document.querySelector('#input-div');

function submitInput(event, input) {

    if (event.keyCode === 13){

        event.preventDefault();
        
        if (input.trim() === ''){

            return;
        }

       createNewElement(input);
       ClearInput();
       
    }
}

function createNewElement(input){

    let newTextElement = document.createElement('p');
    let newInputElement = document.createElement('input');
    let newDivElement = document.createElement('div');
    let newDeleteButton = document.createElement('button');
  
    newDivElement.setAttribute('id', 'list-container');
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

function ClearInput(){

    document.getElementById('user-input').value = '';

}

function deleteItem(){

    let item = this.parentNode;
    item.parentNode.removeChild(item)
}

function markAllButton(){

    let getAllCheckboxes = document.querySelectorAll('#checkbox');
    
    for (let i = 0; i < getAllCheckboxes.length; i++){

        getAllCheckboxes[i].checked = true;
    }

}

