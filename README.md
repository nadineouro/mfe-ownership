# Modelos de responsabilidade em micro frontends: domínio de negócio versus componentes compartilhados

Este repositório contém a implementação dos protótipos do Trabalho de Conclusão de Curso (TCC) para o MBA em Engenharia de Software do MBA USP ESALQ.

## Objetivo do TCC

Explorar e comparar modelos de responsabilidade em arquiteturas de micro frontends, destacando as diferenças entre abordagens baseadas em domínio de negócio e em componentes compartilhados. O estudo foca em como equipes podem organizar responsabilidades de integração, apresentação e lógica de negócio em aplicações web escaláveis.

## Estrutura do Projeto

- **apps/business-domain-model**: Protótipo A – Modelo de responsabilidade por domínio de negócio. A equipe de produto controla a Página de Produto (PDP), integrando e apresentando dados externos, enquanto a lógica de frete é responsabilidade do domínio de logística, mas sua interface é desenvolvida localmente.
- **apps/api-mock**: Mock de API para simular dados de produto e frete, utilizado por todos os protótipos.
- **apps/shared-components-model**: Protótipo B – Modelo de componentes compartilhados. A PDP utiliza um componente de frete fornecido como biblioteca pelo domínio de logística, com lógica e interface pré-definidas, consumido como unidade fechada, sem modificações locais.
- **packages/**: Configurações, componentes e utilitários reutilizáveis entre os micro frontends.

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie todos os apps em modo desenvolvimento:
   ```bash
   turbo dev
   ```
   Isso irá iniciar todos os micro frontends e o mock de API simultaneamente.

## Referências

- [Next.js](https://nextjs.org)
- [Express](https://expressjs.com)
- [Turborepo](https://turbo.build)

---

MBA USP ESALQ – Engenharia de Software
