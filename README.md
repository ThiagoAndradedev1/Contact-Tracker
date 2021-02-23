<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/63686057/108630676-b482c800-7444-11eb-91c3-e62efda144f1.png" alt="Logo do Projeto"></a>
</p>

<h3 align="center">Contact Tracker</h3>

---

<p align="center"> Projeto realizado utilizando as ferramentas do React e Node.Js.
    <br> 
</p>


## 📝 Índice

- [Sobre](#sobre)
- [Primeiros Passos](#primeiros_passos)
- [Feito Com](#feito_com)
- [Autores](#autores)

## 🧐 Sobre <a name = "sobre"></a>

## - Backend

Toda a lógica do back-end foi construida utilizando Express.js e Mongo DB como banco de dados. Um sistema de autenticação foi desenvolvido no back-end, possibilitando ao usuário as opções de se cadastrar e loggar na aplicação. Também foi desenvolvido um CRUD que possibilita aos usuários a possibilidade de adicionar, ler, deletar e editar os contantos que forem adicionados por ele/ela, os usuários possuem acesso apenas aos contatos criados por eles próprios, garantido a segurança da informação armazenada no banco de dados. A lógica de rota privada foi implementada no back-end, possibilitando que apenas usários cadastrados na aplicação consigam ter acesso a rotas especificas. A API e o banco de dados foram construidos pensando sempre na segurança e bem estar dos usuários. 

## - Frontend

React foi a ferramenta utilizada para construir o front-end. Toda a lógica do front foi desenvolvida para reforçar a segurança da aplicação, as páginas de Registrar e Login interagem com o back-end e permitem que o usário tenha acesso a página de Home (que é protegida por uma rota privada e permite que apenas usuários cadastrados tenham acesso a ela). Na página de Home o usuário iria encontrar todos os contatos armazenados por ele, podendo adicionar novos contatos, deletar ou editar. O usuário também pode procurar por um contato em especifico através da barra de pesquisa. ContextAPI e os conceitos do clean code foram útilizados nesse projeto.


## ⛏️ Feito Com <a name = "feito_com"></a>

- [ReactJs](https://reactjs.org) - Web Framework
- [Express.Js](https://expressjs.com/pt-br/) - Node.Js Framework
- [Mongo DB](https://www.mongodb.com/) - Banco de Dados

## ✍️ Autores <a name = "autores"></a>

- [@ThiagoAndradedev1](https://www.linkedin.com/in/thiago-andrade-8423ab1b8/) - Ideia & Trabalho inicial
