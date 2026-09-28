# Painel-Acesso-Docker

Atividade prática desenvolvida durante a disciplina de **Segurança e Hospedagem**, com foco na utilização do Docker para executar uma aplicação sem depender das configurações e dependências instaladas diretamente na máquina.

## Objetivo

Aprender a utilizar **Docker e Docker Compose** para containerizar uma aplicação, permitindo que ela seja executada em diferentes ambientes de forma mais padronizada.

## Sobre a atividade

O projeto consiste em um sistema simples de **login e painel de acesso**, composto por Frontend e Backend.

O **código da aplicação foi fornecido pelo professor** como parte do material da aula. A atividade tinha como objetivo criar a estrutura necessária para executar essa aplicação utilizando Docker.

Foram desenvolvidos e configurados:

* `Dockerfile`;
* `docker-compose.yml`;
* Container da aplicação;
* Mapeamento de portas;
* Volume para persistência dos dados.

Após a configuração, a aplicação foi executada com Docker e **testada no navegador, funcionando corretamente**.

## Funcionamento com Docker

A aplicação é executada dentro de um container, utilizando uma imagem do **Node.js**.

O Docker Compose configura:

* O container `painel-acesso`;
* A porta `3010` do computador para a porta `3002` do container;
* O volume `dados_painel` para armazenar os dados da aplicação.

Dessa forma, os arquivos e dependências necessários para executar o projeto ficam organizados dentro do ambiente do container, reduzindo a dependência da configuração local da máquina.

## Tecnologias utilizadas

* Docker
* Docker Compose
* Node.js
* Express
* JavaScript
* HTML
* CSS
* JSON

## Conceitos estudados

* Criação de Dockerfiles;
* Utilização do Docker Compose;
* Criação e execução de containers;
* Mapeamento de portas;
* Utilização de volumes Docker;
* Persistência de dados;
* Containerização de aplicações Node.js;
* Execução de aplicações sem depender diretamente das configurações do ambiente local.

## Contexto acadêmico

Projeto desenvolvido como uma **atividade prática de Docker** na disciplina de **Segurança e Hospedagem**.

A atividade serviu como preparação para aplicar os mesmos conceitos de containerização posteriormente no projeto **Sentinela**, desenvolvido como parte do TCC.

O Frontend e o Backend utilizados nesta atividade foram disponibilizados pelo professor. O foco da atividade foi a criação e configuração da infraestrutura necessária para executar a aplicação utilizando Docker.
