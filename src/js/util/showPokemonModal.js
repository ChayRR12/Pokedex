import { fetchPokemonDescription } from "../api/fetchPokeApi.js"; // Função para buscar a descrição do Pokémon na API
import { capitalizeFirstLetter } from "./formatName.js"; // Função para capitalizar a primeira letra de uma string

// Função que exibe o modal com as informações detalhadas de um Pokémon.
export function showPokemonModal(pokemon) {
    // Obtém os elementos de carregamento e o contêiner de informações do Pokémon
    const loadingContent = document.getElementsByClassName('div-pokebola')[0];
    const pokemonInfoContainer = document.getElementById('pokemonInfoContainer');

    // Exibe o GIF de carregamento e o conteúdo de carregamento
    loadingContent.style.display = 'block'; 
    const pokebola = document.getElementById("loadingGif");
    pokebola.src = "./src/assets/img/eWNtKi3xWBqU0xGVn7.gif";

    // Inicia um timeout para simular um tempo de carregamento antes de mostrar as informações do Pokémon
    const timeoutId = setTimeout(() => {
        showPokemonContent(pokemon, loadingContent); // Chama a função para mostrar as informações do Pokémon após o tempo
    }, 2900);

    // Função assíncrona para mostrar as informações do Pokémon no modal
    async function showPokemonContent(pokemon, loadingContent) {
        // Preenche os dados básicos do Pokémon (nome, número e imagem)
        document.getElementById('pokemon-name').textContent = pokemon.name;
        document.getElementById('pokemon-number').textContent = pokemon.number;
        document.getElementById('pokemon-image').src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.number}.gif`;

        // Cria a lista de tipos do Pokémon
        let types = `<span class="pokemon-type-color ${pokemon.type1}Type cardType">${capitalizeFirstLetter(pokemon.type1)}</span>`;
        if(pokemon.type2) {
            types += `<span class="pokemon-type-color ${pokemon.type2}Type cardType">${capitalizeFirstLetter(pokemon.type2)}</span>`;
        }
        document.getElementById('pokemon-type').innerHTML = types;

        // Cria a lista de habilidades do Pokémon
        let abilities = `<span>${capitalizeFirstLetter(pokemon.ability1)}</span>`;
        if(pokemon.ability2) {
            abilities += `<span> ${capitalizeFirstLetter(pokemon.ability2)}</span>`;
        }
        document.getElementById('pokemon-abilities').innerHTML = abilities;

        // Cria a lista de estatísticas do Pokémon
        let stats = "";
        stats += `<span>HP</span><span>${pokemon.stats[0]}</span>`
        stats += `<span>Attack</span><span>${pokemon.stats[1]}</span>`
        stats += `<span>Defence</span><span>${pokemon.stats[2]}</span>`
        stats += `<span>Sp. Atk</span><span>${pokemon.stats[3]}</span>`
        stats += `<span>Sp. Def</span><span>${pokemon.stats[4]}</span>`
        stats += `<span>Speed</span><span>${pokemon.stats[5]}</span>`
        document.getElementById('pokemon-stats').innerHTML = stats;

        // Busca a descrição do Pokémon através da API e exibe
        document.getElementById('pokemon-description').innerHTML = await fetchPokemonDescription(pokemon.number);

        // Esconde o conteúdo de carregamento e exibe as informações do Pokémon
        loadingContent.style.display = 'none';
        pokebola.src = ""; // Remove o GIF de carregamento
        pokemonInfoContainer.style.display = 'flex'; // Exibe o contêiner com as informações do Pokémon
    }

    // Adiciona um evento de clique para fechar o modal de informações
    document.getElementById('closePokemonInfo').addEventListener('click', () => {
        pokemonInfoContainer.style.display = 'none'; // Esconde o modal de informações
    });

    // Adiciona um evento de clique no conteúdo de carregamento para simular o fim do carregamento imediatamente
    loadingContent.addEventListener('click', function onClick() {
        clearTimeout(timeoutId); // Cancela o timeout caso o usuário clique antes de esperar
        showPokemonContent(pokemon, loadingContent); // Mostra as informações do Pokémon imediatamente
        loadingContent.removeEventListener('click', onClick); // Remove o ouvinte de evento após o clique
    });
}
