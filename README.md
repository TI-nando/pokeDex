# Pokédex Retrô (Vue 3 + Vite)

Uma Pokédex com tema retrô inspirada em Pokémon, construída com Vue 3 e Vite. O projeto traz uma experiência visual leve com gradientes cinza, tipografia estilo 8‑bit e cores por tipo de Pokémon.

## Visão Geral

- Lista os Pokémon clássicos (por padrão, 151) em cards com visual retrô.
- Busca por nome ou ID diretamente na barra de pesquisa.
- Página de detalhes com arte oficial, altura, peso, estatísticas e badges coloridas por tipo.
- Cabeçalho clicável: ao clicar no título ou no ícone, você volta para a página inicial.
- Tema global com gradiente cinza → branco e fontes de alto contraste (preto) para melhor legibilidade.

## Tecnologias

- Vue 3
- Vite 7
- Pinia (Store)
- Vue Router 4
- CSS (variáveis de tema e gradientes)

## Requisitos

- Node.js: `^20.19.0` ou `>=22.12.0`

## Instalação e Uso

1. Instale as dependências:
   ```sh
   npm install
   ```
2. Ambiente de desenvolvimento (hot reload):
   ```sh
   npm run dev
   ```
   Acesse `http://localhost:5173/`.
3. Build para produção:
   ```sh
   npm run build
   ```
4. Preview do build:
   ```sh
   npm run preview
   ```
5. Lint e formatação:
   ```sh
   npm run lint
   npm run format
   ```

## Estrutura do Projeto

```
├── index.html
├── public/
│   └── pokemonlogo.png
├── src/
│   ├── App.vue                # Header, container e footer
│   ├── assets/
│   │   ├── base.css           # Variáveis e tema global (gradiente do body)
│   │   └── main.css           # Fonte global, resets e headers
│   ├── components/
│   │   ├── PokemonCard.vue    # Card com gradiente, nome centralizado e badges por tipo
│   │   ├── PokemonDetail.vue  # Página de detalhes (rota /pokemon/:id)
│   │   ├── SearchBar.vue      # Busca por nome/ID
│   │   └── pokemonList.vue    # Grid com cards de Pokémon
│   ├── router/index.js        # Rotas (home e detalhe)
│   ├── stores/pokemonStore.js # Fetch da lista e de Pokémon por nome/ID (PokeAPI)
│   └── main.js                # Bootstrap da aplicação e import de estilos
└── vite.config.js
```

## Funcionalidades

- Lista de Pokémon com gradiente suave nas bordas dos cards.
- Nome do Pokémon destacado e centralizado nos cards.
- Badges por tipo com cores tradicionais (fogo, água, grama, etc.).
- Detalhes com texto em preto para alto contraste, incluindo altura e peso.
- Cabeçalho com gradiente cinza e link para a página inicial.

## API

Este projeto consome a [PokeAPI](https://pokeapi.co/):

- Lista: `GET https://pokeapi.co/api/v2/pokemon?limit=151`
- Detalhes: `GET https://pokeapi.co/api/v2/pokemon/{nameOrId}`

Você pode ajustar limites e filtros diretamente na store (`src/stores/pokemonStore.js`).

## Personalização do Tema

- Cores e gradientes: `src/assets/base.css` (variáveis `--retro-*` e background do `body`).
- Tipografia dos títulos: `src/assets/main.css` (fonte "Press Start 2P").
- Cabeçalho e título: `src/App.vue` (gradiente cinza do header e destaque do título).
- Card e badges: `src/components/PokemonCard.vue` (bordas com gradiente, badge por tipo).
- Página de detalhes: `src/components/PokemonDetail.vue` (texto preto e badges por tipo).

## Dicas

- Para carregar mais Pokémon, altere o parâmetro `limit` em `fetchPokemon(limit = 151)`.
- Para ajustar contraste, modifique `color` nas classes de texto (ex.: `.pokemon-name`, `.pokemon-details-card`).
- Para trocar o ícone do header, substitua `public/pokemonlogo.png`.

## Licença

Projeto para fins de estudo/demonstração. Sem licença específica definida.
