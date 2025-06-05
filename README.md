# 🚀 Boilerplate NestJS - CRUD de Produtos e Empresas com Docker, PostgreSQL e Redis Cache

Este projeto é um boilerplate NestJS que foi estendido para incluir um CRUD (Create, Read, Update, Delete) completo para entidades de **Empresas** e **Produtos**. Ele utiliza **Prisma** como ORM para interação com o banco de dados **PostgreSQL**, e incorpora **Docker** para orquestração de serviços, além de **Redis** para caching de rotas de leitura.

Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de desenvolvedor backend Node.js.

## ✨ Funcionalidades Implementadas

* **CRUD Completo:**
    * **Empresas (`Company`):** Criação, listagem, busca por ID, atualização e remoção de registros.
    * **Produtos (`Product`):** Criação, listagem, busca por ID, atualização e remoção de registros.
* **Relacionamento:** Produtos estão relacionados a Empresas (um para muitos).
* **Validação de DTOs:** Utiliza `class-validator` e `class-transformer` para garantir a integridade dos dados de entrada.
* **Banco de Dados PostgreSQL:** Configurado para persistência de dados.
* **Docker & Docker Compose:** Ambiente de desenvolvimento e produção conteinerizado para a aplicação NestJS, PostgreSQL e Redis.
* **Cache com Redis:** Implementação de cache para otimizar operações de leitura (GET) nas rotas de Empresas e Produtos, utilizando `@nestjs/cache-manager`.
* **Documentação Interativa (Swagger):** Automaticamente gera uma documentação de API acessível via navegador.

## 📦 Tecnologias Utilizadas

* **NestJS:** Framework progressivo para Node.js.
* **TypeScript:** Linguagem de programação.
* **Prisma ORM:** ORM moderno para Node.js e TypeScript.
* **PostgreSQL:** Banco de dados relacional.
* **Redis:** Banco de dados em memória, utilizado para caching.
* **Docker & Docker Compose:** Ferramentas para conteinerização e orquestração de serviços.
* **`class-validator` & `class-transformer`:** Para validação e transformação de DTOs.
* **Swagger (OpenAPI):** Para documentação e teste interativo da API.

## ⚙️ Configuração do Projeto

Siga os passos abaixo para configurar e rodar o projeto em sua máquina.

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (versão 18 ou superior, preferencialmente 20+)
* [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/)
* [Git](https://git-scm.com/downloads)

### 1. Fork e Clone do Repositório

Primeiro, faça um fork deste repositório para sua conta do GitHub e clone-o para sua máquina local.

```bash
# 1. Vá para [https://github.com/Guilherme-Artigas/boilerplate_nestjs](https://github.com/Guilherme-Artigas/boilerplate_nestjs)
# 2. Clique no botão "Fork" no canto superior direito.
# 3. Clone SEU repositório bifurcado:
git clone [https://github.com/SEU_USUARIO/boilerplate_nestjs.git](https://github.com/SEU_USUARIO/boilerplate_nestjs.git)
cd boilerplate_nestjs