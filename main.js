let input = document.querySelector('#user-input')
let inputsection = document.querySelector('#user-section')
let list = document.querySelector('#todo-list')

let todo = document.querySelector('#input-div');

function submitInput(event, input) {

    if (event.keyCode === 13){

        event.preventDefault();

       
        let newListElement = document.createElement('li')
        let newTextElement = document.createElement('p');
        let newInputElement = document.createElement('input')
        let newDivElement = document.createElement('div')
      
        newDivElement.setAttribute('id', 'list-container')
       newTextElement.setAttribute('id', 'text-content')
       newListElement.setAttribute('id', 'list-item')
       newInputElement.setAttribute('id', 'checkbox');
       newInputElement.type = 'checkbox';


        newTextElement.textContent = input;
        newListElement.appendChild(newTextElement);
        newListElement.appendChild(newInputElement)
        newDivElement.appendChild(newListElement);
      
       list.appendChild(newDivElement);

      


    }
}
function markAllButton(){


}