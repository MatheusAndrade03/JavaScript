function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let dateValue = document.getElementById("idata").value;
    let categoriaValue = document.getElementById("categoria").value;
    
    // Verificar se todos os campos estão preenchidos
    if (inputValue === '' || dateValue === '' || categoriaValue === '') {
        alert("Você precisa descrever a tarefa, selecionar uma data e escolher uma categoria");
        return;
    }

    // Criar o texto do item da lista com a descrição, data e categoria
    let t = document.createTextNode(`${inputValue} (Data: ${dateValue}) [Categoria: ${categoriaValue}]`);
    li.appendChild(t);
    
    // Adicionar o item à lista
    document.getElementById("itemLista").appendChild(li);
    
    // Limpar os campos de input
    document.getElementById("tarefa").value = "";
    document.getElementById("idata").value = "";
    document.getElementById("categoria").value = "Trabalho"; // Reset para o valor padrão
    
    // Criar o botão de fechar
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    // Criar o botão de editar
    let editSpan = document.createElement("SPAN");
    let editTxt = document.createTextNode("✎"); // caractere de lápis
    editSpan.className = "edit";
    editSpan.appendChild(editTxt);
    li.appendChild(editSpan);
    
    // Adicionar o evento de click ao botão de fechar
    let close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Adicionar o evento de click ao botão de editar
    let edit = document.getElementsByClassName("edit");
    for (let i = 0; i < edit.length; i++) {
        edit[i].onclick = function() {
            let li = this.parentElement;
            let parts = li.firstChild.nodeValue.split(" (Data: ");
            let descricao = parts[0];
            let dateParts = parts[1].split(") [Categoria: ");
            let data = dateParts[0];
            let categoria = dateParts[1].slice(0, -1);

            document.getElementById("tarefa").value = descricao;
            document.getElementById("idata").value = data;
            document.getElementById("categoria").value = categoria;

            li.remove();
        }
    }
}

function excluirTodos() {
    let lista = document.getElementById("itemLista");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

// Adicionar os botões de fechar e editar para os itens já existentes
let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);

    let editSpan = document.createElement("SPAN");
    let editTxt = document.createTextNode("✎");
    editSpan.className = "edit";
    editSpan.appendChild(editTxt);
    myNodelist[i].appendChild(editSpan);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let edit = document.getElementsByClassName("edit");
for (let i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
        let li = this.parentElement;
        let parts = li.firstChild.nodeValue.split(" (Data: ");
        let descricao = parts[0];
        let dateParts = parts[1].split(") [Categoria: ");
        let data = dateParts[0];
        let categoria = dateParts[1].slice(0, -1);

        document.getElementById("tarefa").value = descricao;
        document.getElementById("idata").value = data;
        document.getElementById("categoria").value = categoria;

        li.remove();
    }
}