import { maxPage, currentPage, setCurrentPage } from "../main.js"; // Importa as variáveis e função necessárias de main.js

// Função que adiciona eventos de navegação para as setas de "anterior" e "próximo" na navegação de páginas
export function addEventToNav() {
    // Obtém o botão de "página anterior" pelo seu ID
    const previous = document.getElementById("previous-page");

    // Adiciona um evento de clique para o botão "página anterior"
    previous.addEventListener("click", (event) => {
        // Verifica se a página atual é maior que 1 para permitir a navegação para a página anterior
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1); // Decrementa a página atual e chama a função para atualizar a página
        }
    });

    // Obtém o botão de "próxima página" pelo seu ID
    const next = document.getElementById("next-page");

    // Adiciona um evento de clique para o botão "próxima página"
    next.addEventListener("click", (event) => {
        // Verifica se a página atual é menor que a página máxima para permitir a navegação para a próxima página
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1); // Incrementa a página atual e chama a função para atualizar a página
        }
    });
}
