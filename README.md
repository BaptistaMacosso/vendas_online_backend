<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  # Vendas Online Backend

Backend da plataforma de **Vendas Online**, desenvolvido com **NestJS, TypeScript, TypeORM e PostgreSQL**.

O projeto disponibiliza uma API backend organizada por módulos, com suporte a autenticação, gestão de utilizadores, controlo de permissões, localização, cache e persistência de dados através do TypeORM.

> **Status:** Em desenvolvimento
> **Versão:** 0.0.1

---

## 📋 Índice

* [Sobre o projeto](#-sobre-o-projeto)
* [Tecnologias](#-tecnologias)
* [Arquitetura](#-arquitetura)
* [Estrutura do projeto](#-estrutura-do-projeto)
* [Módulos](#-módulos)
* [Autenticação](#-autenticação)
* [Autorização](#-autorização)
* [Gestão de utilizadores](#-gestão-de-utilizadores)
* [Localização](#-localização)
* [Cache](#-cache)
* [Base de dados](#-base-de-dados)
* [Migrations](#-migrations)
* [Configuração](#-configuração)
* [Instalação](#-instalação)
* [Execução](#-execução)
* [Testes](#-testes)
* [Build e produção](#-build-e-produção)
* [Qualidade do código](#-qualidade-do-código)
* [Próximos módulos](#-próximos-módulos)

---

# 📌 Sobre o projeto

O **Vendas Online Backend** é uma API REST desenvolvida com NestJS para servir como camada de backend de uma plataforma de vendas online.

A aplicação foi estruturada utilizando uma arquitetura modular do NestJS, permitindo separar responsabilidades e facilitar a evolução do sistema.

Atualmente, a estrutura contempla principalmente:

* Autenticação;
* Gestão de utilizadores;
* Controlo de acesso por roles;
* Gestão de localização;
* Cache;
* Persistência através de TypeORM;
* Migrations;
* Validação de dados;
* Testes unitários e E2E.

---

# 🛠️ Tecnologias

## Backend

| Tecnologia        | Utilização             |
| ----------------- | ---------------------- |
| Node.js           | Runtime                |
| TypeScript        | Linguagem              |
| NestJS 11         | Framework backend      |
| TypeORM           | ORM                    |
| PostgreSQL        | Base de dados          |
| JWT               | Autenticação           |
| bcrypt            | Hash de passwords      |
| class-validator   | Validação              |
| class-transformer | Transformação de dados |
| cache-manager     | Cache                  |
| Jest              | Testes                 |
| Supertest         | Testes HTTP            |

O `package.json` do projeto confirma estas dependências e ferramentas.

---

# 🏗️ Arquitetura

A aplicação segue a arquitetura modular do NestJS:

```text
                    ┌──────────────────────┐
                    │      Cliente         │
                    │ Web / Mobile / API   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      Controllers     │
                    │    REST API          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       Services       │
                    │ Regra de negócio     │
                    └──────────┬───────────┘
                               │
                 ┌─────────────┴─────────────┐
                 ▼                           ▼
        ┌────────────────┐          ┌────────────────┐
        │    TypeORM     │          │     Cache      │
        └───────┬────────┘          └────────────────┘
                │
                ▼
        ┌────────────────┐
        │   PostgreSQL   │
        └────────────────┘
```

A organização modular está refletida diretamente na pasta `src`, que contém módulos independentes para autenticação, utilizadores, localização e cache, além de componentes transversais como guards e decorators.

---

# 📁 Estrutura do projeto

```text
vendas_online_backend/
│
├── src/
│   │
│   ├── auth/
│   │   ├── dtos/
│   │   │   ├── login.dto.ts
│   │   │   ├── loginPayload.dto.ts
│   │   │   └── returnLogin.dto.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   └── auth.service.ts
│   │
│   ├── cache/
│   │   ├── cache.module.ts
│   │   └── cache.service.ts
│   │
│   ├── decorators/
│   │
│   ├── guards/
│   │   └── rolesGuard.guard.ts
│   │
│   ├── localizacao/
│   │   ├── dtos/
│   │   ├── interface/
│   │   ├── localizacao.controller.ts
│   │   ├── localizacao.module.ts
│   │   └── localizacao.service.ts
│   │
│   ├── migration/
│   │
│   ├── user/
│   │   ├── __mocks__/
│   │   ├── __tests__/
│   │   ├── dtos/
│   │   │   ├── createUser.dto.ts
│   │   │   └── returnUser.dto.ts
│   │   ├── enums/
│   │   │   └── user-type.enum.ts
│   │   ├── user.controller.ts
│   │   ├── user.module.ts
│   │   └── user.service.ts
│   │
│   ├── utils/
│   │
│   ├── app.module.ts
│   └── main.ts
│
├── package.json
├── package-lock.json
├── nest-cli.json
├── tsconfig.json
├── tsconfig.build.json
├── tsconfig.spec.json
├── eslint.config.mjs
├── .prettierrc
└── README.md
```

---

# 🔐 Autenticação

A autenticação está isolada no módulo `auth`.

```text
src/auth/
├── dtos/
│   ├── login.dto.ts
│   ├── loginPayload.dto.ts
│   └── returnLogin.dto.ts
├── auth.controller.ts
├── auth.module.ts
└── auth.service.ts
```

O projeto utiliza JWT através do pacote `@nestjs/jwt`.

O fluxo conceptual é:

```text
Cliente
   │
   │ credenciais
   ▼
POST /auth/login
   │
   ▼
AuthController
   │
   ▼
AuthService
   │
   ├── valida utilizador
   ├── verifica password
   └── gera JWT
   │
   ▼
Token JWT
   │
   ▼
Cliente
```

Para endpoints protegidos, o cliente deverá enviar o token através do header:

```http
Authorization: Bearer <access_token>
```

---

# 👤 Gestão de utilizadores

O módulo `user` é responsável pela gestão dos utilizadores.

```text
src/user/

├── dtos/
├── enums/
├── __mocks__/
├── __tests__/
├── user.controller.ts
├── user.module.ts
└── user.service.ts
```

O módulo possui DTOs para criação e retorno de utilizadores e um enum específico para o tipo de utilizador.

A password é protegida utilizando `bcrypt`.

### Responsabilidades

* Criar utilizadores;
* Validar dados;
* Verificar existência de utilizadores;
* Proteger passwords;
* Retornar dados através de DTOs;
* Aplicar regras de autorização.

---

# 🛡️ Autorização

O projeto possui um `rolesGuard.guard.ts`, indicando a existência de um mecanismo de autorização baseado em roles.

```text
Request
   │
   ▼
JWT / utilizador autenticado
   │
   ▼
RolesGuard
   │
   ├── Role permitida → continua
   │
   └── Role não permitida → acesso negado
```

Este mecanismo permite evoluir o sistema para diferentes perfis de acesso, por exemplo:

```text
ADMIN
CUSTOMER
SELLER
MANAGER
```

Os valores efetivamente suportados devem ser mantidos de acordo com o enum existente no projeto.

---

# 📍 Localização

O módulo `localizacao` está separado em:

```text
localizacao/
├── dtos/
├── interface/
├── localizacao.controller.ts
├── localizacao.module.ts
└── localizacao.service.ts
```

A separação entre DTOs, interfaces, controller e service permite manter a responsabilidade de cada camada isolada.

---

# ⚡ Cache

O projeto possui um módulo próprio para cache:

```text
cache/
├── cache.module.ts
└── cache.service.ts
```

A implementação utiliza `@nestjs/cache-manager` e `cache-manager`.

O cache pode ser utilizado para reduzir consultas repetitivas à base de dados e melhorar o desempenho de endpoints que trabalham com informação frequentemente consultada.

---

# 🗄️ Base de dados

A persistência é feita através de **TypeORM**, utilizando PostgreSQL.

Dependências principais:

```text
@nestjs/typeorm
typeorm
pg
```

Arquitetura:

```text
NestJS
   │
   ▼
TypeORM
   │
   ▼
PostgreSQL
```

A estrutura de migrations encontra-se em:

```text
src/migration/
```

---

# 🔄 Migrations

O projeto utiliza migrations do TypeORM para controlar alterações estruturais na base de dados.

### Criar migration

```bash
npx typeorm migration:create ./src/migration/nome_da_migration
```

Exemplo:

```bash
npx typeorm migration:create ./src/migration/create_table_user
```

> Antes de executar migrations em produção, deve ser confirmado o `DataSource` utilizado pelo TypeORM e os scripts específicos definidos para o projeto.

---

# ⚙️ Configuração

Antes de executar o projeto, configure as variáveis de ambiente necessárias para a aplicação.

Exemplo:

```env
PORT=3000

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=vendas_online

JWT_SECRET=change-this-secret
```

> Os nomes exatos das variáveis devem corresponder à configuração existente no projeto.

Nunca coloque passwords, JWT secrets ou credenciais de produção diretamente no GitHub.

---

# 📦 Instalação

Clone o repositório:

```bash
git clone https://github.com/BaptistaMacosso/vendas_online_backend.git
```

Entre no diretório:

```bash
cd vendas_online_backend
```

Instale as dependências:

```bash
npm install
```

---

# ▶️ Desenvolvimento

Para iniciar normalmente:

```bash
npm run start
```

Para desenvolvimento com hot reload:

```bash
npm run start:dev
```

Para debug:

```bash
npm run start:debug
```

---

# 🏭 Produção

Primeiro faça o build:

```bash
npm run build
```

Depois execute:

```bash
npm run start:prod
```

O script de produção utiliza:

```bash
node dist/main
```

---

# 🧪 Testes

## Testes unitários

```bash
npm run test
```

## Testes em modo watch

```bash
npm run test:watch
```

## Testes E2E

```bash
npm run test:e2e
```

## Coverage

```bash
npm run test:cov
```

O projeto possui uma estrutura específica de testes dentro do módulo `user`, incluindo `__tests__` e `__mocks__`.

---

# 🧹 Qualidade do código

### Formatação

```bash
npm run format
```

### ESLint

```bash
npm run lint
```

### Build

```bash
npm run build
```

---

# 🔄 Fluxo de autenticação

```text
┌──────────────┐
│    Cliente   │
└──────┬───────┘
       │
       │ email + password
       ▼
┌──────────────┐
│ AuthController│
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ AuthService  │
└──────┬───────┘
       │
       ├───────────────┐
       │               │
       ▼               ▼
  User Service     bcrypt
       │               │
       └───────┬───────┘
               │
               ▼
          JWT Token
               │
               ▼
            Cliente
```

---

# 🛒 Evolução prevista para o sistema de vendas

A estrutura atual fornece uma boa base para evoluir o backend para uma plataforma completa de comércio eletrónico.

Uma possível evolução modular seria:

```text
src/
├── auth/
├── user/
├── localizacao/
├── cache/
│
├── product/
├── category/
├── inventory/
├── customer/
├── cart/
├── order/
├── payment/
├── shipping/
├── coupon/
├── notification/
└── reporting/
```

### Fluxo futuro

```text
Cliente
   │
   ▼
Produtos
   │
   ▼
Carrinho
   │
   ▼
Checkout
   │
   ├── Cliente
   ├── Endereço
   ├── Stock
   └── Pagamento
   │
   ▼
Pedido
   │
   ▼
Processamento
   │
   ▼
Entrega
```

---

# 📚 Documentação da API

À medida que os controllers forem implementados, recomenda-se adicionar Swagger/OpenAPI ao projeto.

A documentação deverá apresentar:

* Endpoint;
* Método HTTP;
* Parâmetros;
* Headers;
* DTO de entrada;
* Resposta;
* Códigos HTTP;
* Autenticação necessária;
* Roles permitidas.

Exemplo:

```text
POST /auth/login

Request
{
  "email": "user@example.com",
  "password": "********"
}

Response
{
  "accessToken": "..."
}
```

---

# 🔒 Segurança

O backend utiliza mecanismos importantes para segurança da aplicação:

* JWT para autenticação;
* bcrypt para proteção de passwords;
* Guards para autorização;
* DTOs para validação;
* Separação entre dados de entrada e dados retornados.

Em produção recomenda-se também:

* HTTPS;
* Secrets através de variáveis de ambiente;
* CORS configurado corretamente;
* Rate limiting;
* Logs;
* validação rigorosa dos payloads;
* proteção contra exposição de informações sensíveis.

---

# 📈 Estado atual

O projeto encontra-se em fase de desenvolvimento.

### Implementado

* [x] Estrutura NestJS
* [x] TypeScript
* [x] TypeORM
* [x] PostgreSQL
* [x] Módulo de autenticação
* [x] JWT
* [x] bcrypt
* [x] Módulo de utilizadores
* [x] DTOs
* [x] Roles Guard
* [x] Módulo de localização
* [x] Cache
* [x] Estrutura de migrations
* [x] Testes unitários
* [x] Testes E2E

### Próximas etapas

* [ ] Produtos
* [ ] Categorias
* [ ] Stock
* [ ] Clientes
* [ ] Carrinho
* [ ] Pedidos
* [ ] Pagamentos
* [ ] Entregas
* [ ] Dashboard
* [ ] Relatórios
* [ ] Swagger/OpenAPI
* [ ] Docker
* [ ] CI/CD

---

# 📄 Licença

Este projeto está atualmente configurado como privado/licença não publicada no `package.json`.

Defina a licença do projeto antes de disponibilizá-lo como software open source.

---

# 👨‍💻 Desenvolvimento

Projeto desenvolvido para estudos e evolução de uma plataforma de vendas online utilizando NestJS e TypeScript.

**Repository:**
https://github.com/BaptistaMacosso/vendas_online_backend
