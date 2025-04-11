
# 🌐 Web Produtos – Angular Frontend

Frontend desenvolvido com **Angular 17+** para consumo da API REST de gerenciamento de produtos. Este projeto integra-se diretamente com o backend [API Produtos](https://github.com/seu-usuario/apiProdutos), formando uma aplicação fullstack moderna, responsiva e escalável.

---

## 🚀 Tecnologias e Bibliotecas Utilizadas

- **Angular 17**
- **TypeScript**
- **Bootstrap** – Estilização responsiva
- **Angular Router** – Gerenciamento de rotas SPA
- **Angular Forms** – Formulários reativos
- **Highcharts** – Visualização de dados
- **JWT Interceptor** – Injeção automática de token de autenticação
- **RxJS** – Programação reativa
- **SCSS** – Estilização modular por componente

---

## 📁 Estrutura de Pastas

Organizado de forma modular por responsabilidades:

```
src/app/
├── components/
│   ├── layout/            # Componentes de layout (navbar, footer, etc.)
│   └── pages/             # Páginas principais (CRUD de produtos, login, dashboard)
├── configurations/        # Configuração de rotas, interceptors e serviços
├── interceptors/          # Interceptação HTTP para injeção de JWT
├── services/              # Comunicação com a API
└── models/                # Interfaces e tipos TypeScript
```

---

## 🔐 Segurança

- Integração com **JWT Token** para autenticação
- Interceptor HTTP para anexar token automaticamente nas requisições protegidas

---

## 🛠️ Funcionalidades

- ✅ Autenticação de usuários
- 📦 Cadastro, edição e exclusão de produtos
- 🔎 Consulta e listagem paginada de produtos
- 📊 Dashboard com gráficos via Highcharts
- 💡 Feedback visual com validações reativas

---

## 🔗 Backend

Este frontend consome os serviços da API REST em:  
📦 [API Produtos – Spring Boot](https://github.com/seu-usuario/apiProdutos)

---

## ▶️ Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
ng serve
```

3. Acesse no navegador:

```
http://localhost:4200
```

---

## 🛠️ Requisitos

- Node.js 18+
- Angular CLI
- Navegador moderno

---

## 📌 Boas Práticas Adotadas

- Divisão clara de responsabilidades (componentes, serviços, modelos)
- Comunicação desacoplada com API via `services`
- Uso de reactive forms com validação
- Interceptor para autenticação automatizada
- Modularização com carregamento eficiente de componentes

---

## 👨‍💻 Autor

Projeto desenvolvido por **Renan Santana** para fins de aprendizado e demonstração de boas práticas com Angular.
