const txtInput= document.querySelector('#task');

const btnAdd= document.querySelector('#add');
const lista = document.querySelector('#list');


console.log(txtInput.value);





// chamadas de btn
btnAdd.addEventListener('click', () => {

    const valor = txtInput.value;

    const li= document.createElement('li');
    li.innerHTML = valor;
    const btnDel= document.createElement('button');
    btnDel.innerHTML = 'x';
    btnDel.setAttribute("class", "delete");
    li.appendChild(btnDel);
    btnDel.addEventListener('click', (event) => {
        const li = event.target.parentElement;
        lista.removeChild(li);

    })

    lista.appendChild(li);
    txtInput.value = '';

    



})