# Treina1Web

## Ferramentas

As principais ferramentas utilizadas serão:
* NodeJS
* npm
* angular-cli
* Visual Code Studio

### NodeJS

Node.js é um runtime JavaScript desenvolvido com o Chrome's V8 JavaScript engine. É um interpretador de JavaScript assíncrono com código aberto orientado a eventos.

Site: https://nodejs.org/pt-br/

#### Instalação

Para este treinamento deve-se utilizar a versão 10 ou uma de suas releases.

* Instalador Windows: https://nodejs.org/dist/v10.16.3/node-v10.16.3-x64.msi

* Linux Ubuntu: https://github.com/nodesource/distributions/blob/master/README.md#debinstall

```
# Ubuntu
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
``` 

Após instalar, para verificar a versão do node utiliza-se o comando:
```
node -v
```

Resultado esperado deve ser semelhante a:
```
v10.16.3
```

### NPM

Npm é o gerenciador de pacotes e ele já é instalado juntamente com o NodeJS. A versão utilizada neste treinamento deverá ser igual ou superior a 6.

Site: https://www.npmjs.com/
<br>
Documentação: https://docs.npmjs.com/cli-documentation/

Para verificar a versão do npm utiliza-se o comando:
```
npm -v
```

Resultado esperado deve ser semelhante a:
```
6.9.0
```

### Angular-CLI

A CLI Angular é uma ferramenta de interface da linha de comandos que você usa para inicializar, desenvolver e manter aplicativos Angular. Você pode usar a ferramenta diretamente em uma interface de comando ou indiretamente por meio de uma interface do usuário interativa, como o Visual Code Studio.

Sites: 
* https://angular.io/cli
* https://cli.angular.io/

#### Instalação

A instalação global do angular-cli é realizada através do npm:
```
npm install -g @angular/cli
```

Ao instalar o angular-cli, as bibliotecas básicas para desenvolvimento com o Angular já são instaladas.

Após a instalação, deve-se checar a versão do angular-cli com o comando:
```
ng version
```

O resultado deve ser semelhante a:
```
Angular CLI: 8.3.6
Node: 10.16.3
OS: linux x64
Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.803.6
@angular-devkit/core         8.3.6
@angular-devkit/schematics   8.3.6
@schematics/angular          8.3.6
@schematics/update           0.803.6
rxjs                         6.4.0
```

### Visual Code Studio

O Visual Code Studio é a IDE utilizada para desenvolvimento.

Site: https://code.visualstudio.com/

#### Instalação

Para instalar o Visual Code Studio deve-se baixar o instalador referente ao seu sistema operacional diratamente pelo site do produto.

## Sobre este projeto

Baixe os fontes ....

















<br><br><br><br>
<hr>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
