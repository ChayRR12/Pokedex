import { FORMATED_NAMES } from "../constants/constants.js";

// Função para formatar o nome do Pokémon, utilizando um nome formatado ou o nome padrão.
export function formatPokemonName(pokemonName, pokemonNumber) {
    // Verifica se há um nome formatado para o número do Pokémon, usando o array FORMATED_NAMES.
    let name = FORMATED_NAMES[pokemonNumber];
    
    // Se existir um nome formatado, retorna esse nome.
    if(name) {
        return name;
    }
    else {
        // Caso contrário, retorna o nome do Pokémon com a primeira letra maiúscula.
        return capitalizeFirstLetter(pokemonName);
    }
}

// Função para capitalizar a primeira letra de uma string.
export function capitalizeFirstLetter(string) {
    // Verifica se a string não é vazia ou nula.
    if(string) {
        // Retorna a string com a primeira letra em maiúscula e o restante em minúscula.
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    else {
        // Se a string for vazia ou nula, retorna "Bulbasaur" como valor padrão.
        return "Bulbasaur";
    }
}
