


const inputUsuario = document.querySelector('#usuario');
const inputSenha = document.querySelector('#senha');
const botaoCadastrar = document.querySelector('#btn-cadastrar');
const inputEmail= document.querySelector('#email');







// Adicionando evento de click no botão
botaoCadastrar.addEventListener('click', ()=>{
        let Usuario = inputUsuario.value;
        let Senha = inputSenha.value;
        let Email = inputEmail.value;

        if(Usuario==""||Email==""|| Senha=="" ){
            alert("Preencha todos os campos");
            return
        }
        if(Senha.length<6){
            alert("A senha deve ter no mínimo 6 caracteres");
            return
        }

         let id=gerarId();

        const  cadastro = {Usuario, Senha, Email, id };
        
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        cadastros.push(cadastro);
        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        adicionarLista(cadastro);
        limparCampos();
        

})


// function 

// remove um elemento da lista
function removerLista(cadastro){

    let cadastros= JSON.parse(localStorage.getItem("cadastros"))
    let novoCadastro= cadastros.filter(item=> item.id!=cadastro.id);
    localStorage.setItem("cadastros", JSON.stringify(novoCadastro));
    
    
}

// adiciona um novo elemento na lista 
function adicionarLista(cadastro){

        const lista = document.querySelector('#lista-usuarios')
        const item = document.createElement('li');
        item.innerHTML = `<p>${cadastro.Usuario}</p>  <p>${cadastro.Email}</p> <p>${cadastro.Senha}</p>`;
        const btnExcluir = document.createElement('button');
        btnExcluir.innerHTML="X";
        btnExcluir.setAttribute('id', 'btn-excluir');
       item.appendChild(btnExcluir);
        
        btnExcluir.addEventListener('click', ()=>{
            removerLista(cadastro);
            item.remove();
        })

       lista.appendChild(item);
}

// limpar campos

function limparCampos(){


    inputUsuario.value="";
    inputSenha.value="";
    inputEmail.value="";
}
// gerar id aleatório

function gerarId(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

// carregar lista de cadastros

function carregarLista() {

    let cadastros= JSON.parse(localStorage.getItem("cadastros")) || []
    cadastros.forEach(item=> adicionarLista(item));





}
function atualizarLista(){
    lista.innerHTML = '';
    carregarLista();
}

// carrega a lista de cadastros
function load(){

        carregarLista();

}

