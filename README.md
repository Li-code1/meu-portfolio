# 🚀 Full Stack Portfolio - Li-code1

Este é o meu portfólio profissional, desenvolvido para apresentar minhas habilidades como **Full Stack Developer**. O projeto foca em performance, acessibilidade e design responsivo, com suporte bilíngue (PT/EN) e integração com Frontend e Backend modernos.

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React.js, Vite, Tailwind CSS, Lucide React (ícones).
- **Internacionalização:** conteúdo bilíngue PT/EN via dicionário próprio (`src/i18n`).
- **Acessibilidade & Qualidade:** ESLint, PropTypes.
- **Funcionalidades:** integração com Web3Forms para contato via e-mail, download de currículo em PDF, timeline de formação.
- **Deploy:** Vercel.

---

## 📂 Projetos em Destaque

### 1. 📊 SmartFinance | Consumer Insight Intelligence
Dashboard de finanças pessoais com visualização de dados em tempo real, geração de relatórios em PDF (jsPDF + html2canvas) e gráficos interativos com Recharts.
Para testar, use o e-mail: `admin@admin.com` e senha: `123`

### 2. 🐾 Pet&Style
E-commerce fictício de produtos pet construído com HTML semântico e Tailwind CSS, sem dependência de frameworks JS além de vanilla.

### 3. ✈️ Portal de Viagens
Portal turístico construído com **Next.js 14**, aplicando roteamento dinâmico, layouts reutilizáveis e CSS Modules.

### 4. 📈 SmartMart Pro
Dashboard Full Stack de gestão de vendas e estoque, com back-end em **FastAPI** e front-end em **React**.

### 5. PokeFast API
API RESTful assíncrona e paginada construída com FastAPI, consumindo a PokéAPI original. Cache com Redis, tarefas assíncronas com Celery, persistência híbrida em SQLite, testes automatizados com Pytest, containerização com Docker e pipeline de CI/CD via GitHub Actions.

---

## 🚀 Como Rodar o Projeto Localmente

Para clonar e executar este aplicativo em sua máquina, você precisará do [Git](https://git-scm.com) e [Node.js](https://nodejs.org/en/download/) instalados.

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Li-code1/meu-portfolio.git
   ```

2. **Entrar na pasta do projeto:**
   ```bash
   cd meu-portfolio
   ```

3. **Instalar as dependências:**
   ```bash
   npm install
   ```

4. **Configurar as variáveis de ambiente:**
   Copie o arquivo `.env.example` para `.env` e preencha com sua chave real do [Web3Forms](https://web3forms.com):
   ```bash
   cp .env.example .env
   ```
   ```
   VITE_WEB3FORMS_KEY=sua_chave_aqui
   ```

5. **Iniciar a aplicação:**
   ```bash
   npm run dev
   ```

A aplicação abrirá em `http://localhost:5173`.

---

## 🌐 Deploy e Versão Online

O projeto está configurado para deploy contínuo na **Vercel**.

* **Link para acessar:** https://meu-portfolio-ecru-nu.vercel.app/

Para realizar o deploy manualmente na sua conta Vercel:

1. Conecte seu repositório do GitHub ao painel da Vercel.
2. A Vercel detectará automaticamente as configurações do **Vite**.
3. Em **Project Settings → Environment Variables**, adicione `VITE_WEB3FORMS_KEY` com sua chave real (o arquivo `.env` não vai para o GitHub, então a Vercel precisa dessa variável configurada manualmente).
4. Clique em **Deploy** e pronto!

---

## ✉️ Contato

* **LinkedIn:** https://www.linkedin.com/in/liliane-lima-ti/
* **GitHub:** [@Li-code1](https://github.com/Li-code1)
* **Email:** lilianelimafullstackdeveloper@gmail.com

---

Desenvolvido com 💻 por [Li-code1](https://github.com/Li-code1)
