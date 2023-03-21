//Capturando tag html com ID e colocando em uma variavel var
var h1Elemento = document.getElementById("title-1")

//adicionando um escutador de evento
h1Elemento.addEventListener("click", function(){
    alert("Agora sou autonomo")
})