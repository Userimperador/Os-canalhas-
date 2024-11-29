// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão pelo ID
    const button = document.getElementById('joinDiscord');

    // Verifica se o botão existe antes de adicionar o evento
    if (button) {
        console.log("Botão encontrado. Atribuindo evento de clique...");
        
        // Adiciona o evento de clique ao botão
        button.addEventListener('click', function () {
            const discordLink = "https://discord.gg/oscanalhas"; // Substitua pelo link correto
            window.open(discordLink, "_blank"); // Abre o link em uma nova aba
            console.log("Botão clicado! Redirecionando para:", discordLink);
        });
    } else {
        console.error("Botão com ID 'joinDiscord' não encontrado. Verifique o HTML.");
    }
});
