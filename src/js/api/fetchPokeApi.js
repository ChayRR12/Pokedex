// Importa a URL base da API PokeAPI e funções auxiliares para exibir erros e determinar a geração do Pokémon
import { POKEAPI } from "../constants/constants.js";
import { showError } from "../error/error.js";
import { determinePokemonGeneration } from "../util/cardUtils.js";

// Função assíncrona que busca uma lista de Pokémon entre um offset (ponto de partida) e um limite (quantidade de Pokémon)
export async function fetchPokemonBetween(offset, limit) {
    try {
        // Constroi a URL da requisição com o offset e limite para buscar os Pokémon
        const request = `${POKEAPI}?offset=${offset}&limit=${limit}`;
        
        // Faz a requisição à API PokeAPI e aguarda a resposta
        const data = await fetch(request);
        
        // Converte a resposta para JSON
        const response = await data.json();

        // Retorna os dados dos Pokémon obtidos
        return response;
    }
    catch(error) {
        // Se ocorrer um erro, exibe uma mensagem de erro e loga o erro no console
        showError("Something went wrong with pokeapi. Please try again later.");
        console.error(error.message);
    }
}

// Função assíncrona que busca detalhes específicos de um Pokémon, dado seu número
export async function fetchPokemonDetails(number) {
    try {
        // Constroi a URL da requisição para obter detalhes de um Pokémon específico pelo número
        const request = `${POKEAPI}/${number}`;
        
        // Faz a requisição à API e aguarda a resposta
        const data = await fetch(request);
        
        // Converte a resposta para JSON
        const response = await data.json();

        // Cria um objeto para armazenar os detalhes do Pokémon
        const details = {};
        details.number = number; // Número do Pokémon
        details.type1 = response.types[0].type.name; // Primeiro tipo do Pokémon
        details.type2 = ""; // Inicializa o segundo tipo, se existir
        if(response.types[1]) {
            details.type2 = response.types[1].type.name; // Segundo tipo, se houver
        }

        // Determina a geração do Pokémon
        details.generation = determinePokemonGeneration(number);
        
        // Habilidades do Pokémon
        details.ability1 = response.abilities[0].ability.name;
        details.ability2 = ""; // Inicializa a segunda habilidade, se existir
        if(response.abilities[1]) {
            details.ability2 = response.abilities[1].ability.name; // Segunda habilidade, se houver
        }

        // Estatísticas do Pokémon (HP, Attack, Defense, Sp. Attack, Sp. Defense, Speed)
        details.stats = [
            response.stats[0].base_stat,
            response.stats[1].base_stat,
            response.stats[2].base_stat,
            response.stats[3].base_stat,
            response.stats[4].base_stat,
            response.stats[5].base_stat
        ];

        // Retorna os detalhes do Pokémon
        return details;
    }
    catch(error) {
        // Se ocorrer um erro, exibe uma mensagem de erro e loga o erro no console
        showError("Something went wrong with pokeapi. Please try again later.");
        console.error(error.message);
    }
}

// Função assíncrona que busca a descrição do Pokémon pela sua espécie
export async function fetchPokemonDescription(number) {
    try {
        // Constroi a URL da requisição para obter a descrição do Pokémon baseado no número
        const request = `https://pokeapi.co/api/v2/pokemon-species/${number}`;
        
        // Faz a requisição à API e aguarda a resposta
        const data = await fetch(request);
        
        // Converte a resposta para JSON
        const response = await data.json();

        // Retorna a primeira descrição (flavor_text) do Pokémon
        return response.flavor_text_entries[0].flavor_text;
    }
    catch(error) {
        // Se ocorrer um erro, exibe uma mensagem de erro e loga o erro no console
        showError("Something went wrong with pokeapi. Please try again later.");
        console.error(error.message);
    }
}
