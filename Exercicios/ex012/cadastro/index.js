


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

        const  cadastro = {Usuario, Senha, Email, id,colabordores:[] };
        
        let cadastros = JSON.parse(localStorage.getItem(cadastro.Usuario)) || [];
        cadastros.push(cadastro);
        localStorage.setItem(`${cadastro.Usuario}`, JSON.stringify(cadastros));
        window.alert("Cadastro realizado com sucesso");
        limparCampos();
        

})


// Função para limpar os campos

function limparCampos(){


    inputUsuario.value="";
    inputSenha.value="";
    inputEmail.value="";
}
// gerar id aleatório

function gerarId(){
    return '_' + Math.random().toString(36).substr(2, 9);
}








