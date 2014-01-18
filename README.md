AngularJS-Boilerplate [![Build Status](https://travis-ci.org/fdore/AngularJS-Boilerplate.png?branch=master)](https://travis-ci.org/fdore/AngularJS-Boilerplate)
=====================


Basic setup for AngularJS with RequireJS, Jasmine, Grunt, and Bower.

Simply clone the project, and you are ready to go.

#Project structure

- app
	- css
	- img
	- js
		- controllers
		- directives
		- filters
		- providers
		- services
		- main.js (entry point for requireJS)
		- routes.js (routes configuration)
	- lib (3rd parties libraries) (Note that libraries can be managed using Bower)
	- partials (views)
- node_modules	
- scripts
	- config
- test
	- e2e
	- fixtures
	- unit (unit tests)

#Prerequesites

You will need to have NodeJS installed on your machine. For more information, check out the official website http://nodejs.org/

#Installation

> npm install -g grunt-cli

> npm install -g bower

> npm install

#Running Unit tests

> grunt karma:unit

#Launch site

> node scripts/web-server.js

Open your browser, and go to http://localhost:5000/