# Projeto Pokédex

Este projeto consiste em uma Pokedex interativa que exibe informações detalhadas sobre os Pokémon. Utiliza a API pública PokeAPI para buscar dados como tipo, habilidades, estatísticas e descrições dos Pokémon. A interface é responsiva e permite ao usuário filtrar os Pokémon por tipo, geração e fazer buscas por nome.

## 🎯 Objetivo

Exibir todos os Pokémons com detalhes e uma interface interativa que permite filtros e buscas.

## 🛠 Tecnologias Utilizadas

- **HTML**
- **CSS**
- **Bootstrap**
- **JavaScript**
- **PokeAPI**

## 🌟 Funcionalidades

1. **Exibição de Pokémon**:
   - O projeto carrega uma lista de Pokémon a partir da API PokeAPI.
   - Cada Pokémon é exibido com sua imagem, nome e número.
   - Ao clicar em um Pokémon, um modal é exibido com detalhes adicionais como tipo(s), habilidades e estatísticas.

2. **Modal de Detalhes**:
   - Ao clicar em um Pokémon, o modal exibe detalhes como:
     - Nome e número do Pokémon.
     - Tipos (primário e secundário, se existir).
     - Habilidades (primária e secundária, se existir).
     - Estatísticas como HP, ataque, defesa, etc.
     - Descrição do Pokémon (obtida a partir da API `pokemon-species`).

3. **Filtros**:
   - Os filtros permitem que o usuário selecione tipos de Pokémon (ex: Fogo, Água) e gerações (ex: Geração I, Geração II).
   - Os filtros são aplicados dinamicamente e atualizam a lista de Pokémon exibida conforme a seleção do usuário.

4. **Busca por Nome**:
   - A barra de pesquisa permite ao usuário buscar um Pokémon por nome. A busca é realizada enquanto o usuário digita, com resultados filtrados em tempo real.

5. **Paginamento**:
   - O projeto utiliza navegação paginada para carregar os Pokémon em páginas. O número de Pokémon por página é definido como 48.


## 📁 Estrutura do Projeto

- **index.html**: HTML principal do projeto.
- **style.css**: Arquivo de estilos para o layout e design.
- **JavaScript**:
  - `main.js`: Integração geral de todas as funcionalidades.
    - **Util**:
  - `ShowPokemonModal.js`: Exibe o modal com informações detalhadas do Pokémon.
  - `formatName.js`: Formata os nomes dos Pokémons.
  - `filterPokemons.js`: Filtra os Pokémons por tipo e geração.
  - `fillPageButtons.js`: Gerencia a navegação entre páginas.
  - `createCard.js`: Cria os cards dos Pokémons.
  - `CardUtil.js`: Utilidades para obter informações dos Pokémons.

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/gusdkruger/pokeapi-pokedex.git
---

