
# :rotating_light: Career Blitz Challenge :rotating_light:

O Career Blitz Challenge é uma aplicação que possibilita a pessoa usuária se organizar por meio de uma lista de tarefas.


## Stack utilizada
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

**Front-end:** React, Context API, styled components

**Back-end:** Node, Express, Typescript, Docker, Mongoose(MongoDB)


## Instalação

### Instale o Career Blitz Challenge com `npm`

>Obs: É necessario um ambiente docker configurado para seguir esse tutorial de instalação. O docker é utilizado na criação de um container com uma instâcia do mongoDB.

1. Clone o projeto para um diretório do seu computador, utilizando o seguinte comando no seu terminal:

```
  git clone git@github.com:Ivanielson/sd-014-b-career-blitz-challenge.git
```

2. Acesse o diretório do projeto:

```
cd sd-014-b-career-blitz-challenge/
```

3. Acesse o diretório do backend:

```
cd back-end/
```

4. Instale as dependências do projeto, executando o seguinte comando:

```
npm install
```

5. Execute o seguinte comando para criar um container docker com uma instância do mongoDB:

```
npm run docker:db-up
```

> Aguarde a execução do comando.

- Você deve receber uma saída semelhante a essa no seu terminal:

```
> back-end@1.0.0 docker:db-up
> docker pull mongo && docker run --name mongodb-desafio-blitz -p 27017:27017 -d mongo

Using default tag: latest
latest: Pulling from library/mongo
d5fd17ec1767: Pull complete 
b2c91407ff49: Pull complete 
05bd3555a96c: Pull complete 
49fe477b9b26: Pull complete 
61c30709c846: Pull complete 
0c74ee88dd5a: Pull complete 
77b48c757eb5: Pull complete 
8aecb2f59c4d: Pull complete 
6a1aab21c2a9: Pull complete 
e53674bec5aa: Pull complete 
Digest: sha256:82a55eb6d60997007ff390087d4e064218d477e9611a7becd78664a2ab490eff
Status: Downloaded newer image for mongo:latest
docker.io/library/mongo:latest
330150c7ed1b239620b3dc4530f6edc658568ccf59994a47ee52bddcc2516061
```

6. Inicie a o backend, executando o seguinte comando:

```
npm start
```

> Aguarde a execução do comando.

- Você deve receber uma saída semelhante a essa no seu terminal:

```
> back-end@1.0.0 start
> ts-node-dev src/server.ts

[INFO] 19:54:19 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.6.4)
Ouvindo na porta 3001
```

7. Agora abra um nova aba do seu terminal com o comando:

    **crtl + shift + t**

8. Agora acesse o diretório do fron-end pelo terminal:

```
cd ../fron-end/
```

9. Instale as dependências do projeto, executando o seguinte comando:

```
npm install
```

10. Inicie o frontend da aplicação:

```
npm start
```

> Aguarde a execução do comando.

- A aplicação de iniciar em uma aba do seu navegador automaticamente e você deve receber uma saída semelhante a essa no seu terminal:

```
Compiled successfully!

You can now view front-end in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.14:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

> Obs: Caso a aplicação não abra no navegador automaticamente, acesse pela url(http://localhost:3000) na barra de endereço do seu navegador.

## Deinstalação

1. Para parar a execução da aplicação use o seguinte comando no terminal:

    **ctrl + c**

2. Em seguida feche a aba do terminal onde está rodando o frontend. Use o seguinte comando:

    **ctrl + shift + w**

3. Agora pare a execução do backend. Use o seguinte comando no terminal:

    **ctrl + c**

4. Em seguida execute o comando para **parar** e **remover** o container com a instância do mongoDB:

```
npm run docker:db-down
```


## :construction: ...Em Construção... :construction:
