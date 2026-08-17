# Leitura estratégica — agronutri-demo

**Data:** 17 de agosto de 2026  |  **Repositório:** [agronutri-demo](https://github.com/viniburilux/agronutri-demo)  |  **Autor:** Manus AI

> Este documento é uma auditoria de inventário e potencial. Ele não altera o código existente e não afirma que funcionalidades foram executadas ou validadas quando isso não aparece na evidência observada.

## Síntese executiva

Repositório pequeno contendo um front-end React (Vite) de demonstração chamado "agronutri-demo". Implementação mínima — aplicativo estático que embute um conjunto de dados nutricionais (array FOODS) dentro do código-fonte. É claramente um demo/local prototype sem backend, testes automáticos, CI/CD ou documentação de produto específica.

## Domínio e propósito aparente

Propósito aparente: demonstrar visualização/consulta de itens alimentares/nutricionais (AgroNutri) em uma UI React. Domínio: nutrição/agroalimentar — dataset em português e preços em R$ indicam foco brasileiro ou regional.

## Indicadores do snapshot

| Indicador | Valor |
|---|---:|
| Arquivos contabilizados | 16 |
| Tamanho no snapshot | 166093 bytes |
| Último commit observado | 6abc9ee7b052afb743acd3a61fe4b2f3777b0da1	2026-04-29T20:58:29-04:00	Initial commit |
| Prioridade sugerida | média |

## Evidências observadas

- Arquivo package.json: scripts dev/build/preview e dependências react/react-dom/vite (@vitejs/plugin-react) — indica app React + Vite.
- Arquivo src/App.jsx contém constante FOODS com um grande array de objetos descrevendo alimentos (nome, id, kcal, proteina, custo_kg, disponibilidade por mês etc.) — dados embutidos no front-end.
- vite.config.js define base: '/agronutri-demo/' — sugere deploy esperado em subpath (GitHub Pages ou similar).
- README.md é o template genérico 'React + Vite' sem documentação específica do projeto — documentação de produto ausente.
- Presença de eslint.config.js — há alguma preocupação com linting/qualidade de código.
- Ausência de arquivos de teste (nenhum arquivo de testes listado), CI (nenhum workflow .github/), Docker, ou scripts de deploy — indica reprodutibilidade e pipeline de deploy inexistentes no repositório.
- Estrutura de arquivos e assets: src/, public/, imagens e svgs presentes (hero.png, favicon.svg) — há recursos visuais prontos para UI.

## Ativos e capacidades

- Aplicação front-end React + Vite pronta para rodar localmente via 'npm run dev' (e build via 'npm run build').
- Dataset demo embutido: array FOODS com atributos nutricionais, categorias e disponibilidade mensal — útil para prototipação e demonstrações.
- Configuração básica de lint (eslint.config.js) que pode ser ativada para melhorar qualidade de código.
- Recursos estáticos (imagens e SVGs) para composição visual do demo.
- Configuração de base para deploy em subpath (vite.config.js), facilitando publicação em GitHub Pages ou similar.

## Maturidade observável

Baixa. Evidências mostram um protótipo/demo local com dados estáticos embutidos e infraestrutura mínima. Não há sinais de que foi testado em produção, nem existe governança de dados, pipelines, validações, documentação do domínio, automação de build/deploy, ou controles de qualidade além de lint. O projeto é suficiente para demonstrar uma UI ou protótipo visual, mas não para uso produtivo.

## Potencial de aproveitamento

- Uso como POC/UI demo no ecossistema LuxVerso/GhostWorks para mostrar visualização de dados nutricionais — baixo custo de integração porque é apenas front-end.
- Fonte inicial de dados de exemplo para treinamento/validação de componentes de IA (p.ex. classificadores simples, prompts para geração de recomendações alimentares) depois de extrair e formalizar o dataset.
- Material para criar um microserviço de API de alimentos: extrair FOODS para um repositório de dados ou endpoint REST/GraphQL e adicionar regras de negócio (ex.: filtragem por patologia, disponibilidade sazonal).
- Base para acelerar um demo interativo integrado com pipelines de dados ou modelos GhostWorks — UI pronta para conectar a backend/IA que gere recomendações/rotas de produção.
- Reutilização das imagens e layout para protótipos e apresentações internas.

## Riscos e lacunas

- Dados embutidos no front-end (src/App.jsx) — sem separação de camada de dados; dificulta atualização, auditoria e versionamento dos dados.
- Proveniência e qualidade dos dados desconhecidas — não há metadados, licença, fonte, datas de coleta ou responsáveis; risco para uso em demonstrações públicas ou decisões operacionais.
- Sem testes automatizados ou cobertura — aumenta risco de regressões ao estender o projeto.
- Ausência de CI/CD e pipelines de deploy documentados — reprodutibilidade e entrega não automatizadas.
- Falta de documentação específica do projeto (README genérico) e ausência de guidelines de contribuição/roadmap — dificulta adoção por terceiros.
- Nenhuma política de governança de dados (schema, validações, sensibilidade) — risco se os dados forem ampliados ou integrados com outras fontes.
- Aspectos de segurança e privacidade não tratados (mesmo que sem segredos visíveis): nenhuma validação de entrada, CORS/headers, ou instruções de hardening para deploy público.
- Internacionalização e acessibilidade não evidenciadas — a UI pode não obedecer padrões de A11y e está fixa em português.
- Sem licença declarada — incerteza legal sobre reuso do código e dos dados.

## Próximos passos recomendados

- Extrair o dataset FOODS para um arquivo de dados dedicado (ex.: data/foods.json) e criar um módulo de acesso — separação código/dados facilita governança e testes.
- Adicionar metadados ao dataset: fonte, data de coleta/atualização, responsável, licença e esquema (JSON Schema) para validação automática.
- Criar validações automatizadas do dataset (scripts que executam contra JSON Schema) e incluir em pipeline de CI.
- Adicionar README específico do projeto com objetivo, instruções para executar localmente, decisão de deploy (ex.: GitHub Pages, Netlify), e exemplos de uso.
- Configurar CI (GitHub Actions) com tarefas: lint, build, validação de dados e deploy automático para ambiente de staging/preview.
- Introduzir testes unitários/integração para componentes críticos (p.ex. filtragem, cálculo de nutrientes) e cobertura mínima para regressão.
- Definir e declarar licença de código e de dados para permitir reuso no ecossistema LuxVerso/GhostWorks.
- Adicionar um pequeno backend ou mock API (ex.: /api/foods) para separar UI do dados e permitir integração com serviços de IA e pipelines. Preferir uma API que exponha versões e metadados.
- Registrar esquema e dataset em catálogo interno de dados (metadados EDA) do LuxVerso/GhostWorks — facilita descoberta e governança.
- Avaliar e documentar requisitos de segurança e privacidade antes de publicar dados (mesmo que não sensíveis): headers, CSP, revisão de dependências e ausência de segredos no repositório.
- Considerar adoção gradual de TypeScript para maior robustez em manipulação de dados e composição de componentes.
- Planejar casos de uso integrados com IA: definir contratos de entrada/saída para serviços que recomendam dietas/menus, e preparar dataset de treino/validação com splits e anotações — sempre documentando proveniência e limites de validade.

## Método e limites

A leitura foi feita sobre um snapshot de profundidade 1 e sobre arquivos textuais selecionados por relevância estrutural, incluindo README, manifests e amostras de código. Dependências, notebooks, binários, dados grandes e integrações externas podem exigir uma rodada posterior de execução controlada. Nenhum código do repositório foi executado durante a auditoria.

**Fonte primária:** [agronutri-demo](https://github.com/viniburilux/agronutri-demo)
