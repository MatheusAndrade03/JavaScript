

const usuarios= [
    {
        nome: "Matheus",
        idade: 23,
        email: "matheus@gmail.com"
    } 
    ,
    {
        nome:"Joao",
        idade:20,
        email: "joao@gmail.com"
    },
    {
        nome: "Maria",
        idade: 25,
        email: "maria@gmail.com"    
    }



];


localStorage.setItem(usuarios[0].nome, usuarios[0].json());
localStorage.setItem("senha","123456");

let usuario = localStorage.getItem('usuario');

console.log(usuario);
