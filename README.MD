# Informações sobre o projeto #

* **Inicio** 28/10/2022 **Finalizado em** 25/11/2022.
* **Versao inicial** 1.0.
* **Recursos utilizados**: Js, react, react-native, firebase.
* **Produzido por** Leandro ricardo caixeta junior.

# Motivação para o projeto #

o motivo que levou a criação desse projeto, foi colocar em pratica aquilo que eu ja vinha estudando sobre react-native e sobre react. o objetivo desse projeto é o controle de gastos mensais, com ele a pessoa tem uma visao clara daquilo que ganha e daquilo que sai durante o mes

## Principais funcionalidades ##

* Cadastro de usuario.
* Login de usuario.
* Exibição de dados do usuario.
* Cadastro de receita.
* Edição de receitas.
* Exclusao de receitas.
* Cadastro de despesas do mes.
* Cadastro de despesas fixas.
* Cadastro de despesas parceladas.
* Exclusao de despesas(mes,fixas).
* Edição de despesas (mes,fiexas).
* Exibição de dados (despesas,receitas).
* Calculo do balanço do mes (receitas1,despesas).


## Planos futurus para o projeto ##

Como esse projeto foi desenvolvido com o unico intuito de treinar o uso do react-native, eu nao tenho a intenção de realizar grandes modificações nele no futuro, no maximo eu irei concertar alguns problemas que estao acontecendo no app. alguns desses problemas podem estar acontecendo por falta de conhecimento de algum aspecto da linguagem, ou por simples falta de tempo nessa etapa da minha carreira. um outro ponto importante e quem num primeiro momento nao tenho a intenção de investir nesse app de forma comercial(lançamento oficial para o publico), dessa forma nao é viavel investir muito tempo aqui.

## Problemas e bugs no projeto ##

* Nao coloquei um identificador de usuarios, para os registro que estao sendo inseridos no app, dessa forma todos os registros ficam visiveis para todos. fiquei tao focado no designer nesse projeto que acabei comentando esse deslise na parte do back and.
* Apos realizar uma operação de cadastro ou edição de um determinado tipo de dado(receita,despesa), nao é feita a comtabilidade do mesmo na pagina de dasyboard(nao consegui fazer com que o componente do react, faça a sua redreização a cada atualização).
* para adiantar o processo de desenvolvimento, eu optei por nao dar muita atenção para o backEnd da aplicação, dessa forma, todos os dados foram salvos em arrays, sendo que essas ficaram em arquivos .js
* Nao foi colocado icone na aplicação, alem disso nao houve testes em outros dispositivos que nao fosse os usuados para teste no processo de desenvolvimento (API 30- android Tiramisu Gogle APIs | x86_64) emulador device manager(android studio).
* componentização um pouco fraca do projeto(componentes proprios, usados em mais de uma tela), dava para melhorar algumas partes, tranformando elas em componentes, o problema e que isso iria causa um aumento na complexibilidade do codigo, dessa forma optei por fazer o minimo possivel de componentes (nesse projeto).
* validaçoes de formularios ocorredo na propria pagina, nao em arquivos separado(centralizar as validaçoes em um unico ponto). do jeito que esta, vai ser dificil trocar a forma que sao feitas as validaçoes (mudanças em multiplos arquivos).

## Estrutura base do projeto ##

Estrutura usada para dividir o projeto

![Esquema de pastas usado no projeto](assets/documentacao/Captura%20de%20tela%20de%202022-11-25%2009-51-01.png)