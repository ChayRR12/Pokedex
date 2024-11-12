// Importações dos módulos necessários para o funcionamento do projeto
import { fetchPokemonBetween, fetchPokemonDetails } from "./api/fetchPokeApi.js"; // Funções para buscar dados de múltiplos Pokémons e detalhes específicos
import { drawPage } from "./util/drawPage.js"; // Função que renderiza a página com os Pokémons atuais
import { POKEMONS_PER_PAGE } from "./constants/constants.js"; // Constante para definir quantos Pokémons são exibidos por página
import { addEventsToFilter } from "./events/filterEvents.js"; // Função para adicionar eventos de filtro (tipos, gerações)
import { addEventToNav } from "./events/navEvents.js"; // Função para adicionar eventos de navegação
import { fillPageButtons } from "./util/fillPageButtons.js"; // Função para preencher os botões de paginação
import { formatPokemonName } from "./util/formatName.js"; // Função que formata o nome dos Pokémons

// Array para armazenar todos os Pokémons carregados
export let allPokemons = [];

// Estado dos Pokémons filtrados e função para atualizar esse estado
export let filteredPokemons = [];
export function setFilteredPokemons(newFilteredPokemons) {
    console.log("Old filteredPokemons:\n", filteredPokemons);
    console.log("New filteredPokemons:\n", newFilteredPokemons);
    filteredPokemons = newFilteredPokemons;
    const pages = Math.ceil(filteredPokemons.length / POKEMONS_PER_PAGE); // Calcula o número de páginas necessárias com o filtro aplicado
    setMaxPage(pages);
    fillPageButtons(); // Atualiza os botões de navegação
    setCurrentPage(1); // Volta à primeira página ao filtrar
}

// Estado da página atual e função para atualização
export let currentPage = 1;
export function setCurrentPage(newPage) {
    if (maxPage > 0) { // Confirma se há pelo menos uma página a ser exibida
        const oldButton = document.querySelector(`button[data-page="${currentPage}"]`);
        oldButton.classList.remove("active"); // Remove a classe de ativo do botão anterior
        console.log(`Old currentPage: ${currentPage}\nNew currentPage: ${newPage}`);
        currentPage = Number(newPage); // Define a nova página
        const button = document.querySelector(`button[data-page="${currentPage}"]`);
        button.classList.add("active"); // Adiciona a classe de ativo ao botão atual
    }
    drawPage(currentPage); // Renderiza a página atual
}

// Número máximo de páginas baseado no número total de Pokémons e Pokémons por página
export let maxPage = Math.ceil(649 / POKEMONS_PER_PAGE);
export function setMaxPage(newMaxPage) {
    console.log(`Old maxPage: ${maxPage}\nNew maxPage: ${newMaxPage}`);
    maxPage = Number(newMaxPage); // Atualiza o número máximo de páginas
}

// Inicializa os eventos de filtro e navegação
addEventsToFilter();
addEventToNav();

// Carrega os Pokémons da primeira página
const { results } = await fetchPokemonBetween(0, POKEMONS_PER_PAGE);
allPokemons = results;
for (let i = 0; i < allPokemons.length; i++) {
    const details = await fetchPokemonDetails(i + 1); // Busca detalhes adicionais de cada Pokémon
    allPokemons[i] = { ...allPokemons[i], ...details }; // Combina informações iniciais e detalhes
    allPokemons[i].name = formatPokemonName(allPokemons[i].name, i + 1); // Formata o nome de cada Pokémon
}
filteredPokemons = allPokemons; // Inicializa o estado filtrado com todos os Pokémons

fillPageButtons(); // Gera botões de navegação
setCurrentPage(1); // Define a página inicial como 1

// Carrega os Pokémons das próximas páginas de forma assíncrona
for (let offset = POKEMONS_PER_PAGE; offset <= 649; offset += POKEMONS_PER_PAGE) {
    let limit = POKEMONS_PER_PAGE;
    if (offset + limit > 649) {
        limit = 649 - offset; // Ajusta o limite para não ultrapassar o total de 649 Pokémons
    }

    const { results } = await fetchPokemonBetween(offset, limit);
    allPokemons.push(...results); // Adiciona novos Pokémons ao array principal
}
for (let i = POKEMONS_PER_PAGE; i < allPokemons.length; i++) {
    const details = await fetchPokemonDetails(i + 1);
    allPokemons[i] = { ...allPokemons[i], ...details };
    allPokemons[i].name = formatPokemonName(allPokemons[i].name, i + 1);
}
filteredPokemons = results;
console.log(filteredPokemons);

// Função para rolar o menu horizontal ao passar o mouse perto das bordas
function scrollMenuOnHover(menuId) {
    const menu = document.getElementById(menuId);
    let scrollAmount = 0;

    menu.addEventListener('mousemove', (event) => {
        const menuWidth = menu.clientWidth;
        const menuScrollWidth = menu.scrollWidth;
        const mouseX = event.clientX - menu.getBoundingClientRect().left;

        // Determina a direção e intensidade do rolar com base na posição do mouse
        if (mouseX > menuWidth * 0.8 && menu.scrollLeft + menuWidth < menuScrollWidth) {
            scrollAmount = 1; 
        } else if (mouseX < menuWidth * 0.2 && menu.scrollLeft > 0) {
            scrollAmount = -1; 
        } else {
            scrollAmount = 0; 
        }
    });

    // Aplica o rolamento suave usando `setInterval`
    setInterval(() => {
        if (scrollAmount !== 0) {
            menu.scrollLeft += scrollAmount * 5;
        }
    }, 20);
}

// Aplica a função de rolagem aos menus de filtro
scrollMenuOnHover("type-filter");
scrollMenuOnHover("generation-filter");
