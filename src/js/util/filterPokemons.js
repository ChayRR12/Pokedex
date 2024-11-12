import { allPokemons, setFilteredPokemons } from "../main.js";

// Função para filtrar os Pokémon com base nos filtros de tipo, geração e nome.
export function filterPokemons() {
    // Cria um array vazio que armazenará os Pokémon filtrados
    let filtered = [];

    // Seleciona todos os inputs do filtro de tipo
    const typeFilter = document.querySelectorAll("#type-filter label input");
    const types = []; // Array que armazenará os tipos selecionados

    // Verifica quais tipos foram selecionados e os adiciona ao array 'types'
    typeFilter.forEach(element => {
        if(element.checked) {
            types.push(element.value); // Adiciona o tipo ao array se estiver selecionado
        }
    });

    // Seleciona todos os inputs do filtro de geração
    const generationsFilter = document.querySelectorAll("#generation-filter label input");
    const generations = []; // Array que armazenará as gerações selecionadas

    // Verifica quais gerações foram selecionadas e as adiciona ao array 'generations'
    generationsFilter.forEach(element => {
        if(element.checked) {
            generations.push(Number(element.value)); // Adiciona a geração ao array se estiver selecionada
        }
    });

    // Obtém o valor da barra de pesquisa (nome do Pokémon) e remove espaços extras
    const searchName = document.getElementById("input-search").value.trim();
    console.log(searchName); // Exibe o nome do Pokémon pesquisado no console para depuração

    // Filtra todos os Pokémon com base nos tipos, gerações e nome de pesquisa
    allPokemons.forEach(pokemon => {
        // Verifica se o Pokémon está incluído nos tipos selecionados ou se não há filtro de tipo
        let includedInTypes = types.includes(pokemon.type1) || types.includes(pokemon.type2) || types.length === 0;

        // Verifica se o Pokémon está incluído nas gerações selecionadas ou se não há filtro de geração
        let includedInGenerations = generations.includes(pokemon.generation) || generations.length === 0;

        // Verifica se o nome do Pokémon inclui o termo de pesquisa ou se não há filtro de nome
        let includedInSearchName = pokemon.name.toLowerCase().includes(searchName) || searchName.length === 0;

        // Se o Pokémon atender a todos os filtros, ele é adicionado ao array 'filtered'
        if(includedInTypes && includedInGenerations && includedInSearchName) {
            filtered.push(pokemon);
        }
    });

    // Atualiza os Pokémon filtrados na aplicação
    setFilteredPokemons(filtered);
}
