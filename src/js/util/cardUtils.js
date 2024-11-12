import { REGEX_TO_EXTRACT_POKEMON_NUMBER } from "../constants/constants.js"; //Função para extrair o número do Pokémon a partir de uma URL.

export function extractPokemonNumber(url) {
    const match = url.match(REGEX_TO_EXTRACT_POKEMON_NUMBER);
    if(match) {
        return match[1]; // Retorna o número do Pokémon se for encontrado
    } else {
        return 1; // Retorna 1 como valor padrão se o número não for encontrado
    }
}

export function determinePokemonGeneration(number) {
    let generation = 1;
    if(number > 649) {
        generation = -1; // Define um valor específico para Pokémons fora das gerações principais
    } else if(number > 493) {
        generation = 5;
    } else if(number > 386) {
        generation = 4;
    } else if(number > 251) {
        generation = 3;
    } else if(number > 151) {
        generation = 2;
    }
    return generation; // Retorna a geração correspondente ao número do Pokémon
}
