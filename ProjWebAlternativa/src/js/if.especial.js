// Adiciona um evento de clique ao ícone apenas quando a largura da tela for menor que 768px
if (window.matchMedia("(max-width: 500px)").matches) {
    // Adiciona um evento de clique ao ícone
    document.getElementById("imagemCardRequisitos").addEventListener("click", function() {
        // Alterna a visibilidade do parágrafo ao clicar no ícone
        document.getElementById("texto").classList.toggle("texto-escondido");
    });
}
