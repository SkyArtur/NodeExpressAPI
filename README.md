# Node Express API

Exercício prático para educação em programação.

#### Tecnologias utilizadas:
- [Docker&copy;](https://www.docker.com/products/docker-descktop/)
- [PostgreSQL&copy;](https://www.postgresql.org)
- [Node JS&trade;](https://www.nodejs.org)
- [Sass &copy;](https://sass-lang.com/guide/)
- [Gulp](https://gulpjs.com)
- [Pug](https://pugjs.org/api/getting-started.html)

### Criação do banco de dados
Instale o Docker&copy; para fornecer um banco de dados laboratório para a aplicação. No diretório 'docker', há um arquivo
.yaml para a definição do serviço. 
```shell
cd docker
docker compose up -d
```
Se preferir, user um banco de dados local pré-existente, há a necessidade de alterar os parâmetros em 'database/index.js'.
OBS.: Devido ao caráter didático da aplicação, apenas é possível uma conexão com banco de dados Postgresql;

Instale as dependências e inicie a aplicação com o comando: 
```shell
npm install 
npm start
```
https://github.com/SkyArtur/NodeExpressAPI/assets/93395366/c7a69f08-6f74-4d04-b677-ec92933e0a7e

