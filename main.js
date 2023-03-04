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

    if (selectParentElement != null ) {


        // hidebutton.removeAttribute('id');
        // hidebutton.classList.add('mark-All-Button');
        hidebutton.style.display = 'grid';
        hidebutton.style.gridArea = 'button';
        hidebutton.style.border = 'none';

        footerManu.style.display = 'grid';

    }
    else {

        hidebutton.style.display = 'none';
        footerManu.style.display = 'none';
        let defaultFilterButton = document.querySelector('#show-all-button')
        setSelectedFilterButton(defaultFilterButton);
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
    showClearCompleted();

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
    showClearCompleted();
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
    showClearCompleted();

}

function showTodos(event, a ,b) {

    setSelectedFilterButton(event.target);
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

function clearCompleted() {

    let getAllCheckboxes = document.querySelectorAll('#checkbox');

    for (let i = 0; i < getAllCheckboxes.length; i++) {

        if (getAllCheckboxes[i].checked === true) {

            getAllCheckboxes[i].parentNode.remove();
        }
    }

    hideElement();
    showItemsLeft();
    showClearCompleted();
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

function showClearCompleted(){

    let allCheckboxes = document.querySelectorAll('#checkbox');
    let deleteButton = document.querySelector('#clear-completed-button')

   let isAnyCheckboxChecked = Array.from(allCheckboxes).some(c => c.checked)

   if (isAnyCheckboxChecked){

    deleteButton.style.visibility = 'visible';

   }
   else {

    deleteButton.style.visibility = 'hidden';

   }

}

function setSelectedFilterButton(targetButton){

    let filterButtons = document.getElementsByClassName('filter-button');

    Array.from(filterButtons).forEach(f => {

        f.classList.remove('selected-filter-button');
    });

    targetButton.classList.add('selected-filter-button');

}




