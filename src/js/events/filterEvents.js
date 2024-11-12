import { filterPokemons } from "../util/filterPokemons.js"; // Importa a função filterPokemons, que aplica os filtros aos Pokémons

// Função que adiciona eventos aos filtros de pesquisa e tipo de Pokémon
export function addEventsToFilter() {
    // Obtém o formulário de pesquisa pelo ID
    const searchForm = document.getElementById("search-form");

    // Adiciona um evento de 'submit' ao formulário de pesquisa
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário (que recarregaria a página)
        //filterPokemons(); // (Comentado) Aqui seria chamada a função para filtrar os Pokémons, caso o formulário fosse enviado
    });

    // Obtém o campo de pesquisa (input) pelo seu ID
    const inputSearch = document.getElementById("input-search");

    // Adiciona um evento 'keyup' ao campo de pesquisa, ou seja, sempre que uma tecla for solta
    inputSearch.addEventListener("keyup", (event) => {
        filterPokemons(); // Chama a função de filtro para atualizar os Pokémons filtrados
    });

    // Obtém todos os checkboxes de tipo de Pokémon pelo seletor CSS
    const typesCheckboxes = document.querySelectorAll("#type-filter label input");

    // Para cada checkbox de tipo, adiciona um evento de 'change'
    typesCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", (event) => {
            filterPokemons(); // Chama a função de filtro para atualizar os Pokémons filtrados quando o tipo for alterado
        });
    });

    // Obtém todos os checkboxes de geração de Pokémon pelo seletor CSS
    const generationCheckboxes = document.querySelectorAll("#generation-filter label input");

    // Para cada checkbox de geração, adiciona um evento de 'change'
    generationCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", (event) => {
            filterPokemons(); // Chama a função de filtro para atualizar os Pokémons filtrados quando a geração for alterada
        });
    });
}
