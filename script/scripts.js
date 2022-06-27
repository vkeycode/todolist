let formDOM = document.querySelector('#userForm')

formDOM.addEventListener('submit', formSubmit) // form DOM after click formSubmit event run

let ulDOM = document.querySelector('#list')


function formSubmit(event){ // form submit event
        
        event.preventDefault() //defaul none so no refresh page
        
        let formText = document.querySelector('#Notes') 
        localStorage.setItem('notes', formText.value)  // set local storage value
        if(formText.value == ''){
                alert("Lütfen Bir Yapılacak Durum Giriniz") // if formText.value is empty
        }
        else{
        formText.value = '' // delete formText.value
        let newLi = document.createElement('li') // createElement newli
        newLi.setAttribute('id', 'addText') // add id to element
        newLi.classList.add('p-2','mb-2', 'rounded', 'd-flex', 'justify-content-between') // add class to element
        newLi.style.color = 'black'// add style to element
        newLi.style.fontWeight = 'bold' // add style to element
        newLi.style.backgroundColor = 'gray' // add style to element
        
        ulDOM.append(newLi) // add element in ulDOM
        newLi.innerHTML = localStorage.getItem('notes') // get localStorage value  in newli innerHTML
        newLi.innerHTML += `<i class="fa-solid fa-xmark" id="removeButton" style=" cursor: pointer" onClick="removeTask(this)"></i>` // add delete button in newli innerHTML and after onclick run function removeTask;
        }
        
}

function removeTask(e){
        e.parentNode.parentNode.removeChild(e.parentNode); // removeTask is call 
}





