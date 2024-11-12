import { extractPokemonNumber } from "../util/cardUtils.js"; //Função que extrai o número do Pokémon a partir da URL, usada para identificar qual imagem exibir.
import { POKEMON_LIST } from "../constants/constants.js"; //Um elemento constante onde os cards dos Pokémons serão adicionados na página.
import { showPokemonModal } from "./showPokemonModal.js";//Função que exibe um modal com informações detalhadas do Pokémon quando um card é clicado.
import { capitalizeFirstLetter } from "./formatName.js";//Função que transforma a primeira letra de uma string em maiúscula, usada para formatar os nomes dos tipos de Pokémon.

export function createCard(pokemon) {
    const pokemonNumber = extractPokemonNumber(pokemon.url); //Extrair o número do Pokémon, que será usado para montar a URL da imagem do Pokémon e associá-lo ao elemento HTML criado.

    const card = document.createElement('div');
    card.className = "card";
    card.style.borderRadius = "25px";
    card.style.marginBottom = "15px";

    let types = `<span class="pokemon-type-color ${pokemon.type1}Type cardType">${capitalizeFirstLetter(pokemon.type1)}</span>`; //Criado com uma span estilizada que usa capitalizeFirstLetter para capitalizar o tipo.
    if(pokemon.type2) {
        types += `<span class="pokemon-type-color ${pokemon.type2}Type cardType">${capitalizeFirstLetter(pokemon.type2)}</span>`; //Adiciona outra span para exibir o segundo tipo, se existir.
    }

    //Monta a estrutura do card com informações do Pokémon
    card.innerHTML = `
        <div class="card-color ${pokemon.type1}">
        <img loading="lazy" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png" class="card-img-top" alt="${pokemon.name}">        
        <div class="card-body">
            <h5 class="card-title">${pokemon.name}</h5>
            <span class="pokemon-number d-none">${pokemonNumber}</span>
            <div class="type-spam">
            ${types}
            </div>
        </div>
        </div>`;

    //Adiciona um evento de clique ao card que, ao ser ativado, chama showPokemonModal(pokemon) para exibir um modal com mais informações sobre o Pokémon.
    card.addEventListener("click", () => {
        showPokemonModal(pokemon);
    });

    //Adiciona o card criado ao POKEMON_LIST, que é o contêiner onde todos os cards de Pokémon são exibidos.
    POKEMON_LIST.appendChild(card);
}
