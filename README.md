# J4M - Plataforma de Game Jams

J4M é uma plataforma web desenvolvida para facilitar a organização e participação em Game Jams. O projeto permite que usuários criem, participem e acompanhem competições de desenvolvimento de jogos, conectando desenvolvedores e criadores em eventos colaborativos.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento da aplicação
- **Tailwind CSS** - Framework de estilização

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd J4M
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Como Executar

### Modo de Desenvolvimento

Execute o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm preview
```

## 📂 Estrutura do Projeto

```
J4M/
├── public/           # Arquivos estáticos
├── src/
│   ├── assets/       # Imagens e recursos
│   ├── components/   # Componentes reutilizáveis
│   │   ├── inputs/   # Componentes de input
│   │   ├── Button.jsx
│   │   ├── CardComunnity.jsx
│   │   ├── CardOficialJam.jsx
│   │   ├── SideBar.jsx
│   │   └── SidebarLayout.jsx
│   ├── pages/        # Páginas da aplicação
│   │   ├── cadastro/
│   │   ├── campeoes/
│   │   ├── createJam/
│   │   ├── equipe/
│   │   ├── homePage/
│   │   ├── login/
│   │   └── uploadJam/
│   ├── App.jsx       # Componente principal
│   ├── AppRouter.jsx # Configuração de rotas
│   ├── main.jsx      # Ponto de entrada
│   └── index.css     # Estilos globais
├── index.html
├── package.json
└── vite.config.js
```

## ✨ Funcionalidades Desenvolvidas

### 🔐 Autenticação
- **Login** - Tela de autenticação de usuários
- **Cadastro** - Registro de novos usuários
- Recuperação de senha

### 🏠 Página Inicial (Home)
- Visualização de Jams oficiais
- Seção de Jams da comunidade
- Cards informativos sobre eventos

### 🏆 Campeões
- Galeria de projetos vencedores
- Busca de projetos

### 🎮 Gestão de Game Jams

#### Criar Jam
- Formulário completo para criação de nova Game Jam
- Campos incluem:
  - Nome da Jam
  - Descrição detalhada
  - Tags de categorização
  - Tipo de premiação (nenhuma, simbólica, monetária, outros)
  - Upload de imagem de capa
  - Configuração de prazo (data/hora de início e fim)
  - Seleção de fuso horário

#### Upload de Projeto (Participar de Jam)
- Submissão de projetos para Game Jams
- Campos incluem:
  - Link do vídeo pitch (máx 3 minutos)
  - Link do repositório GitHub
  - Descrição do game
  - Upload de slides de apresentação

### 👥 Equipe
- Visualização de informações da equipe
- Fotos dos membros
- Descrição da equipe
- Informações de contato

### 🎨 Interface
- Layout responsivo com Tailwind CSS
- Sidebar navegável com react-pro-sidebar
- Sistema de rotas protegidas (logged/não logged)
- Design moderno com cores personalizadas (pink/rosa como cor principal)

## 🗺️ Rotas da Aplicação

### Rotas Protegidas (Usuário Logado)
- `/` - Página inicial
- `/campeoes` - Galeria de vencedores
- `/upload-jam` - Submissão de projeto
- `/create-jam` - Criação de nova Jam
- `/equipe` - Informações da equipe

### Rotas Públicas
- `/login` - Autenticação
- `/cadastro` - Registro

## 🔄 Estado Atual do Projeto

O projeto está em fase de desenvolvimento do frontend, com as principais telas e fluxos de navegação implementados. As funcionalidades de backend e integração com API ainda precisam ser desenvolvidas.

## 📝 Notas de Desenvolvimento

- O projeto utiliza React 19 com StrictMode ativado
- Hot Module Replacement (HMR) configurado via Vite
- Tailwind CSS v4 integrado via plugin do Vite
