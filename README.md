# Moringa Bootcamps Frontend

[Live Application](https://moringa-bootcamps-frontend.herokuapp.com/)

> This is the UI implementation of Moringa Bootcamps backend that allows user to Create Read Update and Delete bootcamps. The project is created using Angular 12 to implement the UI that consume the [Moringa Bootcamps APIs ](https://github.com/munyuaDeveloper/moringa_school_api.git) APIs

## Prerequisites

This project requires NodeJS (version 14 or later) and NPM.
[Node](http://nodejs.org/), [NPM](https://npmjs.org/) and [Angular](https://angular.io/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v && ng --version
6.14.13
v14.17.0
12.2.10
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with cloning this repo on your local machine:

```sh
$ git clone https://github.com/munyuaDeveloper/moringa-bootcamps-frontend.git 
$ cd moringa-bootcamps-frontend
```

To install and set up the library, run:

```sh
$ npm install
```

Or if you prefer using Yarn:

```sh
$ yarn add
```
## configure-your-env-variables
Make sure that the url in both environment.ts and environment.prod.ts is the correct backend url.

```sh
 API_SERVICE_URL: 'https://moringa-bootcamp-api.herokuapp.com'
```

## Usage

### Serving the app

```sh
$ npm run dev
```

## Author

* **Peter Munyua** - [munyuaDeveloper](https://github.com/munyuaDeveloper)
