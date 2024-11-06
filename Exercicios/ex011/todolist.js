const txtInput= document.querySelector('#task');
const corpo= window.document.body;
const btnAdd= document.querySelector('#add');
const lista = document.querySelector('#list');
let id = 0;

console.log(txtInput.value);





// chamadas de btn e funções

// carregar  lista


const loadList = ()=>{
       



    for(let i = 0; i < localStorage.length; i++) {
        const li= document.createElement('li');
        li.innerHTML = localStorage.getItem(localStorage.key(i));
        li.setAttribute("id", localStorage.key(i));
        const btnDel= document.createElement('button');
        btnDel.innerHTML = 'x';
        btnDel.setAttribute("class", "delete");
        li.appendChild(btnDel);
        btnDel.addEventListener('click', (event) => {
            const li = event.target.parentElement;
            localStorage.removeItem(li.id);
            lista.removeChild(li);
        })
        lista.appendChild(li);
        
    }

}


// criar lista
btnAdd.addEventListener('click', () => {

    const valor = txtInput.value;
    const regex = /\d/;
    if(valor === ''|| regex.test(valor)){
        alert('Digite algo');
        return;
    }
    
    // localStorage
    localStorage.setItem("lista"+id, valor);
    // criando elementos
    const li= document.createElement('li');
    li.innerHTML = valor;
    li.setAttribute("id", "lista"+id);
    console.log(li.getAttribute('id'));
    const btnDel= document.createElement('button');
    btnDel.innerHTML = 'x';
    btnDel.setAttribute("class", "delete");
    li.appendChild(btnDel);
    btnDel.addEventListener('click', (event) => {
        const li = event.target.parentElement;
        localStorage.removeItem(li.id);
        lista.removeChild(li);
        

    })

    lista.appendChild(li);
    txtInput.value = '';
    
    id++;

    



})