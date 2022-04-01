const addButton = document.querySelector('.addToDo')
// console.log( addButton)
const container = document.querySelector('.toDoContainer')
// console.log ( container)
const input = document.querySelector('.todo-input')
// console.log(input)
 


addButton.addEventListener('click', e => { 

    const listItem = document.createElement('li')
    listItem.innerText = input.value
    container.appendChild(listItem)
    input.value = ' ';
    
    
        listItem.addEventListener( 'click', e=> { 
            listItem.style.textDecoration = 'line-through'

         setTimeout( bye, 1000);
         function bye () {
             container.removeChild(listItem)
          }
   
        })
        

    

})





