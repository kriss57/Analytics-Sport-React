<div align="center">
- <img src="./src/assets/images/logo.png" width="24"/> ReactJS 18
</div>

# SportSee - Front End ReactJS 18

- <img src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" width="24"/> ReactJS 18
</div>

<p align="center">
    <img src="https://img.shields.io/badge/React-v18.2.0-blue">
    <img src="https://img.shields.io/badge/React--Router-6.9.0-blue">
    <img src="https://img.shields.io/badge/cross-env-7.0.3-violet">
    <img src="https://img.shields.io/badge/node--lts-18.15.0-brightgreen">   
    <img src="https://img.shields.io/badge/npm-9.5.1-brightgreen">
    <img src="https://img.shields.io/badge/recharts-2.5.0-violet">
    <img src="https://img.shields.io/badge/axios-mock-adapter-1.21.2-violet">
  <br><br><br>
</p>

# About

This project is the front of the SportSee application. It is an application that integrates graphics on the user's sports activity.

Projet lancer avec le [Create React App](https://github.com/facebook/create-react-app).

## Features

- Application with 2 public pages : USER and HOME
- Data manipulation with an API Mock
- Data manipulation with a Rest API

## Pre-requisites

To work properly check your environment

- [NodeJS (**version 18 or higher**)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

To work properly, once the project is built, it uses a Rest API
[https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

# Installation

Once the repository is cloned and in the project folder, do not forget to install the dependencies

```
npm install
```

## Launch

### Dévlopment

This project starts in development mode and will automatically use the mock with the command :

```
npm  start
```

### Manual switch development API

1/.Go to the root of the project in the .env file and comment variable :

```
#REACT_APP_NODE_ENV = dev-mod
```

2/.Go to the root of the project in the file package.json/"scripts" and:
change

```
 "start": "cross-env REACT_APP_NODE_ENV=dev-mod react-scripts start"
```

to

```
 "start": "cross-env REACT_APP_NODE_ENV=prod-mod react-scripts start"
```

3/.Redémarrer en mode développement

```
npm start
```

### Production

Pour construire et générer les fichier html css et js, vous avez la commande (la génération se fera dans le dossier build)

```
npm build
```
