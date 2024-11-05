const corpo = document.body;

corpo.style.display = "flex";
corpo.style.height = "100vh";
corpo.style.alignItems = "center";
corpo.style.justifyContent = "center";
corpo.style.margin = "0"; 
corpo.style.flexDirection = "column"; 


corpo.innerText="Olá, Mundo!";
corpo.innerHTML += "<h1 id='num'>Olá, Mundo!</h1>"; 
const num = document.getElementById("num");
num.style.color = "red"; // Altera a cor do texto do h1 para vermelho
corpo.innerHTML +="<div id='div1'> <p> Isso ai 🤘 </p> </div>"; // Adiciona um div vazio com id "div1" ao corpo da página
const div1 = document.getElementById("div1");
div1.style.backgroundColor = "#125f7c";
div1.style.width = "200px"; // Altera a largura do div para 200px
div1.style.height = "200px"; // Altera a altura do div para 200px
div1.style.border = "1px solid black"; // Adiciona uma borda preta de 1px ao div
div1.style.display = "flex"; // Define o display do div como flex para centralizar o texto verticalmente e horizontalmente
div1.style.justifyContent = "center"; // Centraliza o texto horizontalmente dentro do div
div1.style.alignItems = "center"; // Centraliza o texto verticalmente dentro do div
div1.style.borderRadius = "10%"; // Adiciona bordas arredondadas ao div para torná-lo circular
