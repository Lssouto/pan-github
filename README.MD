# PanGithub

## Sobre o projeto

Um exemplo de autenticação com o github e listagem dos repositórios. A parte front-end foi gerada a partir do [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9
e a parte back-end é um ExpressJs simples para poder passar pelo CORS e para poder subir um servidor em cloud.

No front-end eu fiz poucas alterações de webpack, alterei somente o lint pro [Airbnb](https://github.com/airbnb/javascript) lint e a pasta de build para fora do angular CLI
na pasta static.

O projeto consiste em duas branches principais a master, que é onde é feito o deploy para o heroku e contem o front compilado na pasta static, e a develop que contém o projeto
gerado com o CLI na pasta front.

### Rodando na master

Rodar o projeto na master é bem simples, somente entre na pasta do projeto rode o comando
```
npm install && npm start
```
ou
```
yarn && yarn start
```

O servidor web vai começar a rodar `http://localhost:8080/`.

### Rodando na develop

É preciso também iniciar o servidor entao siga os passdos do `Rodando na master`.

Após isso, abra outro terminal e entre na pasta front e rode os mesmos comandos.
```
npm install && npm start
```
ou
```
yarn && yarn start
```

Isso irá iniciar a parte do angular, no nosso caso o front `http://localhost:4200/`.
