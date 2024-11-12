import { maxPage, setCurrentPage } from "../main.js"; //Número máximo de páginas, calculado com base na quantidade de Pokémon e o número de Pokémon exibidos por página e Função que define a página atual e atualiza a interface para exibir o conteúdo correspondente.

export function fillPageButtons() { //Inicializa o contêiner que armazena os botões de navegação de página.
    const pageNav = document.getElementById("page-links");
    pageNav.innerHTML = "";
    for(let i = 1; i <= maxPage; i++) {
        const pageButton = document.createElement("button");
        pageButton.setAttribute("data-page", i)
        pageButton.innerText = i;
        pageNav.appendChild(pageButton); //Cria e adiciona botões de página ao contêiner pageNav

        pageButton.addEventListener("click", (event) => { //Define um evento de clique para cada botão, de modo que ao clicar, a página atual mude para a página selecionada.
            const button = event.target
            const newPage = button.getAttribute("data-page");
            setCurrentPage(newPage);
        });
    }
}
