
// constantes
const container = document.querySelector('.con');
const btn= document.querySelector('#btn');
var id=0;
const color ={
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'yellow',
    5: 'purple',
    6: 'pink',
    7: 'brown',
    8: 'darkblue',
    9: 'orange',
    10: 'gray'
}

btn.addEventListener('click', () => {
let nCor = Math.floor(Math.random() * 10);
let number = Math.floor(Math.random() * 1000);
let cor = color[nCor];

const div = document.createElement('div');
div.setAttribute('class', 'div-wrap');
const buton = document.createElement('button');

div.innerHTML += `<p>${id} - </p>`;

div.innerHTML += `<p>${number}</p>`;

div.appendChild(buton);
buton.textContent = 'X';
buton.setAttribute('class', 'buton-x');

div.style.backgroundColor = cor;


container.appendChild(div);
id=id+1;


});

container.addEventListener('click', (event) => {
    
    if(event.target.classList.contains('buton-x')){
        event.target.parentElement.remove();
    }
});







