# **Meu Portfólio**

Bem-vindo ao meu portfólio! Este projeto foi desenvolvido para exibir meus trabalhos e habilidades como desenvolvedor full-stack. O portfólio é uma aplicação web construída com Next.js, TailwindCSS e React, e inclui seções para informações pessoais, serviços oferecidos, projetos e contato.

# **Estrutura do Projeto**

### 1. Page.tsx
**Descrição:** 
O componente principal da página que inclui todas as seções do portfólio e o pop-up de erro.
**Funcionalidade:**
Importa e renderiza os componentes Menu, Home, About, Service, GitHub e Contact.
Exibe o pop-up quando necessário.

### 2. contactMe.tsx
**Descrição:** 
Componente de formulário de contato.
**Funcionalidade:**
Inclui um formulário com campos para nome, e-mail e mensagem.
Usa a biblioteca zod para validação de formulários.
Exibe um pop-up de erro se a validação falhar.

### 3. home.tsx
**Descrição:** 
Seção inicial do portfólio.
**Funcionalidade:**
Exibe uma introdução com informações sobre mim e links para redes sociais.
Permite o download do CV.

### 4. menuLateral.tsx
**Descrição:** 
Menu lateral de navegação.
**Funcionalidade:**
Permite a navegação entre as seções da página.
Usa ícones e rola suavemente para as seções correspondentes.

### 5. portfolio.tsx
**Descrição:**
Seção de portfólio com projetos GitHub.
**Funcionalidade:**
Faz uma requisição à API do GitHub para obter repositórios.
Exibe os repositórios em cartões com informações sobre cada projeto.

### 6. aboutMe.tsx
**Descrição:** 
Seção Sobre Mim com projetos GitHub
**Funcionalidade:**
Exibi uma introdução formal sobre mim na tecnologia.

### 6. myService.tsx
**Descrição:**
Seção meus serviços com projetos GitHub
**Funcionalidade:**
Exibi uma introdução formal sobre meus serviços e ferramentas que utilizo em meus trabalhos.

# **Instalação**

## Clone este repositório:
git clone https://github.com/gugaslitoficial/calculator.git

## Navegue para o diretório do projeto:
cd seu-repositorio

## Instale as dependências:
npm install

## Execute o servidor de desenvolvimento:
npm run dev

## Abra o navegador e acesse http://localhost:3000.

# Tecnologias Utilizadas:
### Next.js: 
Framework React para renderização do lado do servidor.
### React:
Biblioteca para construir interfaces de usuário.
### TailwindCSS: 
Framework CSS utilitário para estilização.
### Zod: 
Biblioteca para validação de dados.

# Funcionalidades:

- Navegação suave entre seções com menu lateral.
- Formulário de contato com validação e pop-up de erro.
- Exibição dinâmica de projetos GitHub.

# Contribuições:

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença:

Este projeto está licenciado sob a MIT License.
