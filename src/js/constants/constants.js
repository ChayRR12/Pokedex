// URL base da API PokeAPI para acessar informações sobre Pokémon
export const POKEAPI = "https://pokeapi.co/api/v2/pokemon";

// Referência ao elemento HTML onde a lista de Pokémon será exibida
export const POKEMON_LIST = document.getElementById("pokemon-list");

// Expressão regular para extrair o número do Pokémon da URL (usado para identificar o Pokémon em uma URL como "https://pokeapi.co/api/v2/pokemon/1/")
export const REGEX_TO_EXTRACT_POKEMON_NUMBER = /n\/(\d+)\//;

// Número de Pokémon exibidos por página, usado para paginação
export const POKEMONS_PER_PAGE = 48;

// Objeto que armazena os nomes formatados de Pokémon com base em seus números. Chave é o número do Pokémon, e o valor é o nome formatado
export const FORMATED_NAMES = {
    29: "Nidoran",
    32: "Nidoran",
    122: "Mr. Mime",
    386: "Deoxys",
    413: "Wormadam",
    439: "Mime Jr.",
    487: "Giratina",
    492: "Shaymin",
    550: "Basculin",
    555: "Darmanitan",
    641: "Tornadus",
    642: "Thundurus",
    645: "Landorus",
    647: "Keldeo",
    648: "Meloetta",
};
