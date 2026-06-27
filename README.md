# 🏦 Banco API Tests

Projeto de automação de testes para a API REST do [banco-api](https://github.com/juliodelima/banco-api), desenvolvido com JavaScript utilizando as bibliotecas Mocha, Supertest e Chai. O objetivo é validar os endpoints da API por meio de testes funcionais automatizados, garantindo a integridade das operações bancárias expostas pela API.

---

## 🎯 Objetivo

Automatizar a validação dos endpoints REST do projeto `banco-api`, cobrindo cenários de sucesso e falha para as principais operações da aplicação, com geração de relatórios HTML ao final da execução.

---

## 🛠️ Stack Utilizada

| Tecnologia | Versão | Descrição |
|---|---|---|
| **Node.js** | >= 18.x | Ambiente de execução JavaScript |
| **Mocha** | ^11.7.6 | Framework de testes |
| **Supertest** | ^7.2.2 | Requisições HTTP nos testes |
| **Chai** | ^6.2.2 | Biblioteca de asserções |
| **Mochawesome** | ^7.1.4 | Gerador de relatórios HTML |
| **dotenv** | ^17.4.2 | Carregamento de variáveis de ambiente |

---

## 📁 Estrutura de Diretórios

```
banco-api-tests/
├── fixtures/          # Dados estáticos utilizados nos testes (payloads, mocks)
├── helpers/           # Funções auxiliares reutilizáveis entre os testes
├── mochawesome/       # Relatórios HTML gerados automaticamente após cada execução
├── test/              # Arquivos de teste (.test.js)
├── .env               # Variáveis de ambiente (não versionado)
├── .gitignore
├── package.json
└── package-lock.json
```

---

## ⚙️ Configuração do Arquivo `.env`

O arquivo `.env` **não está incluso no repositório** e deve ser criado manualmente na raiz do projeto antes de executar os testes.

Crie o arquivo `.env` com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

> **Observação:** substitua o valor de `BASE_URL` pela URL onde a API `banco-api` está sendo executada em seu ambiente.

---

## 🚀 Como Executar

### 1. Pré-requisitos

- Node.js instalado (versão 18 ou superior recomendada)
- A API [banco-api](https://github.com/juliodelima/banco-api) em execução e acessível

### 2. Clonar o repositório

```bash
git clone https://github.com/Almirio9Silva/banco-api-tests.git
cd banco-api-tests
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Criar o arquivo `.env`

```bash
echo "BASE_URL=http://localhost:3000" > .env
```

### 5. Executar os testes

```bash
npm test
```

Este comando executa todos os arquivos `*.test.js` dentro do diretório `test/` com timeout de 200 segundos e gera o relatório com o Mochawesome.

---

## 📊 Relatório de Testes

Após a execução, o Mochawesome gera automaticamente um relatório em HTML no diretório:

```
mochawesome/
└── mochawesome.html
```

Abra o arquivo `mochawesome.html` em qualquer navegador para visualizar o resultado detalhado da execução, incluindo testes aprovados, reprovados e pendentes.
