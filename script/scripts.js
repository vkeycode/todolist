let formDOM = document.querySelector('#userForm')

formDOM.addEventListener('submit', formSubmit)

let ulDOM = document.querySelector('#list')


function formSubmit(event){
        
        event.preventDefault()
        
        let formText = document.querySelector('#Notes')
        localStorage.setItem('notes', formText.value)
        if(formText.value == ''){
                alert("Lütfen Bir Yapılacak Durum Giriniz")
        }
        else{
        formText.value = ''
        let newLi = document.createElement('li')
        newLi.setAttribute('id', 'addText')
        newLi.classList.add('p-2','mb-2', 'rounded', 'd-flex', 'justify-content-between')
        newLi.style.color = 'black'
        newLi.style.fontWeight = 'bold'
        newLi.style.backgroundColor = 'gray'
        
        ulDOM.append(newLi)
        newLi.innerHTML = localStorage.getItem('notes')
        newLi.innerHTML += `<i class="fa-solid fa-xmark" id="removeButton" style=" cursor: pointer" onClick="removeTask(this)"></i>`
        }
        
}

function removeTask(e){
        e.parentNode.parentNode.removeChild(e.parentNode);
}





