
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
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

**Front-end:** React, Context API, Styled-components, Bootstrap

**Back-end:** Node, Express, Typescript, Docker, Mongoose(MongoDB)


## Instalação

### Instale o Career Blitz Challenge com `npm`

>Obs: No tutorial de instalação, utilizo o **Docker** na criação de um container com uma instâcia do mongoDB, para esse processo é necessário ter um ambiente **Docker** configurado na sua máquina. Se você tiver uma instâcia do mongoDB instalada na sua máquina, não é necessário a utilização do **Docker**.

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

> Renomei o arquivo **.env.example** para **.env** e configure a variavel de ambiente com os dados do mongoDB. Ex1. `MONGO_URI=mongodb://localhost:27017/BlitzChallenge`. Caso você tenha uma instância do mongoDB instalada na sua máquina não é necessário executar esse comando, apenas configure a variavel de ambiente como as credenciais do seu mongoDB. Ex2. `MONGO_URI=mongodb://user:password@localhost:27017/BlitzChallenge`. Se não houver usuário e senha, use a as configurações do Ex1.


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

**Você verá a aplicação em execução:**

![Exibe uma imagem do tipo gif, com um demostração da aplicação rodando](./desafio-blitz.gif)

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

## Referência

- [Cheat sheet docker-compose](https://dockerlabs.collabnix.com/docker/cheatsheet/)
- [docker-compose up](https://docs.docker.com/compose/reference/up/)

- [docker-compose down](https://docs.docker.com/compose/reference/down/)

- [Padrões de commits](https://github.com/iuricode/padroes-de-commits)
- [Markdown](https://pt.wikipedia.org/wiki/Markdown)
- [Markdown github cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [MongoDB com Node.js e POO - Course(Trybe)](https://app.betrybe.com/course/back-end/mongodb-com-nodejs-e-poo/mongodb-e-poo/91006798-2877-4004-9cf5-d2d72a859272/o-que-vamos-aprender/4ccdeb02-e6f9-4363-bf9d-c0988bed0820?use_case=calendar)
- [Declaring Defaults in Your Schema - Mangoose](https://mongoosejs.com/docs/defaults.html#declaring-defaults-in-your-schema)
- [React Roter Dom - Switch](https://v5.reactrouter.com/web/api/Switch)
- [Styled-components - Animations](https://styled-components.com/docs/basics#animations)
