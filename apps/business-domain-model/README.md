# Protótipo A – Modelo de Responsabilidade por Domínio de Negócio

Este projeto implementa o Protótipo A do TCC "Modelos de responsabilidade em micro frontends: domínio de negócio versus componentes compartilhados".

## Descrição

A equipe de produto mantém controle total sobre a Página de Produto (PDP), incluindo integração e apresentação de dados externos. A lógica de cálculo de frete é responsabilidade do domínio de logística, mas a interface é desenvolvida localmente pelo time de produto.

## Escopo e Avaliação

O escopo funcional deste protótipo é idêntico ao do Protótipo B. Ambos foram utilizados em simulações controladas para fins comparativos, executadas por um único pesquisador para garantir consistência na implementação e avaliação.

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o projeto em modo desenvolvimento:
   ```bash
   turbo dev
   ```

## Referências

- [Next.js](https://nextjs.org)
- [Express](https://expressjs.com)
- [Turborepo](https://turbo.build)
