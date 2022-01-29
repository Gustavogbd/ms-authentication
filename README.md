# Microserviço de autenticação com Nodejs
Este é um projeto desenvolvido durante algumas lives para disseminação de conhecimento dentro da DIO!

Neste projeto criaremos um microserviço de autenticação que poderá compor a sua caixinha de ferramentas e ser muito útil no seu dia a dia. 🔨🔧

## Composição do nosso projeto
Neste projeto Temos alguns Endpoints Base que podem ser extendidos da forma mais adequada para seu contexto.

São eles:

### Usuários

<ul>
  <li>GET /users</li>
  <li>GET /users/:uuid</li>
  <li>POST /users</li>
  <li>PUT /users/:uuid</li>
  <li>DELETE /users/:uuid</li>
</ul>
Autenticação
<ul>
  <li>POST /token</li>
  <li>POST /token/validate</li>
</ul>
