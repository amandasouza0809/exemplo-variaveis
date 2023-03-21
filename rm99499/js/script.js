// capiturando a tag por id e colocando em uma variável var

var h1Element = document.getElementById("title-1"); 

h1Element.addEventListener("click", function() {
    alert("Agora sou autonomo!");
});


// declaração de variáveis de let, var e const

var nome = "Guilherme";

if (nome !== "") {
    let nome = "Heloísa";
}
console.log(nome)

// const nome = "Guilherme"; 