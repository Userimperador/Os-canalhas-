document.getElementById('joinDiscord').addEventListener('click', function () {
    const discordLink = "https://discord.gg/oscanalhas"; // Substitua pelo link correto
    window.open(discordLink, "_blank"); // Abre o link em uma nova aba
});// Seleciona o botão pelo ID
const button = document.getElementById('joinDiscord');

// Verifica se o botão foi encontrado antes de adicionar o evento
if (button) {
    console.log("Botão encontrado. Atribuindo evento de clique...");

   
    button.addEventListener('click', function () {
        const discordLink = "https://discord.gg/oscanalhas"; // Link do servidor Discord
        window.open(discordLink, "_blank"); // Abre o link em uma nova aba
        console.log("Botão clicado! Redirecionando para:", discordLink);
    });
} else {
    console.error("Botão com ID 'joinDiscord' não encontrado. Verifique o HTML.");
}


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM totalmente carregado e analisado.");
});
