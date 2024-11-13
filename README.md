# clonetabnews

Criando um aplicativo de ponta a ponta desde o principio.

## Organização dos diretórios

```
📦 root
┣ 📂 pages
┃ ┗ 📜 index.js
┣ 📂 models
┃ ┣ 📜 user.js
┃ ┣ 📜 content.js
┃ ┗ 📜 password.js
┣ 📂 infra
┃ ┗ 📜 database.js
┃ ┣ 📂 migrations
┃ ┣ 📂 provisioning
┃ ┃ ┣ 📂 staging
┃ ┃ ┣ 📂 production
┣ 📂 tests
```

- pages => Para o roteamento do NextJS
- models => Entidades, como o `user.js` que define as regras de usuário do sistema.
- Infra => Resposável pela infraestrutra como, por exemplo, a bibilioteca com conexão com banco de dados `database.js`.
  - Migrations => Mirations do banco de dados;
  - provisioning => Infraestrutura como código;
- tests => Guardará os testes automatizados.
