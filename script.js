const div = document.getElementById('list');

function clear() {
    document.querySelector('input').value = '';
}

const btn = document.querySelector('button').addEventListener('click', () => {    
    const inputValue = document.querySelector('input').value;
    if (inputValue === '') {
        swal({title: "Atenção!",text:'Digite uma tarefa', icon: "warning",})
    } else {
        list(inputValue)
    }
    clear()      
})  

function list(value) {
    const cardContainer = document.createElement('div')    
    cardContainer.innerHTML = `
        <input type="checkbox" id="checkbox">         
        <label for="checkbox" id="label">${value}</label>
        <i class="fa fa-trash"></i> 
    `;
    div.appendChild(cardContainer)
}

