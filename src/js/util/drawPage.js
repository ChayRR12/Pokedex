import { POKEMON_LIST, POKEMONS_PER_PAGE } from "../constants/constants.js"; //O contêiner onde os cards dos Pokémon são exibidos na página e Constante que define a quantidade de Pokémon que será exibida por página.
import { filteredPokemons } from "../main.js";//Array de Pokémon que passaram por algum filtro e estão prontos para serem exibidos.
import { createCard } from "../util/createCard.js";//Função que cria um card para um Pokémon e o adiciona ao contêiner.

export function drawPage(pageNumber) { //Limpa o contêiner POKEMON_LIST para que novos cards de Pokémon possam ser adicionados ao mudar de página.
    POKEMON_LIST.innerHTML = "";

    let firstPokemonNumber; //Calcula o índice do primeiro Pokémon a ser exibido na página
    if(--pageNumber === 0) { //Decrementa pageNumber para torná-lo compatível com índices baseados em zero.
        firstPokemonNumber = 0; //Se pageNumber for 0: Define firstPokemonNumber como 0, pois a primeira página começa do primeiro Pokémon.
    }
    else {
        firstPokemonNumber = pageNumber * POKEMONS_PER_PAGE; //Caso contrário: Define firstPokemonNumber como pageNumber * POKEMONS_PER_PAGE, indicando a posição inicial com base na página.
    }

    const lastPokemonNumber = firstPokemonNumber + POKEMONS_PER_PAGE;//Define o índice do último Pokémon na página atual.
    const pokemonsInThePage = filteredPokemons.slice(firstPokemonNumber, lastPokemonNumber);//Usa slice para extrair uma lista de Pokémon (filteredPokemons) que serão exibidos na página, delimitada pelos índices firstPokemonNumber e lastPokemonNumber.
    pokemonsInThePage.forEach(pokemon => {
        createCard(pokemon);
    }); //Para cada Pokémon na página, chama a função createCard(pokemon), que cria e adiciona o card correspondente ao contêiner POKEMON_LIST.
}
