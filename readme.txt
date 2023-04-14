API Challenge README
Este documento README proporciona una descripción general del proyecto API Challenge y cómo ejecutarlo.

Introducción
Este proyecto de Cypress es una prueba automatizada de API que cubre:

Registrar un nuevo usuario haciendo una solicitud a https://api.demoblaze.com/signup
Registrar un usuario existente haciendo una solicitud a https://api.demoblaze.com/signup
Iniciar sesión con credenciales correctas haciendo una solicitud a https://api.demoblaze.com/login
Iniciar sesión con credenciales incorrectas haciendo una solicitud a https://api.demoblaze.com/login
Instalación
Antes de ejecutar el proyecto, debe asegurarse de tener Node.js instalado en su sistema. Puede descargar Node.js desde el sitio web oficial https://nodejs.org/.

Después de instalar Node.js, puede instalar el proyecto de Cypress ejecutando el siguiente comando:
npm install cypress --save-dev
Este comando descargará e instalará el proyecto de Cypress junto con sus dependencias.

Estructura del proyecto
El proyecto de Cypress tiene la siguiente estructura de directorios:

cypress/
e2e/
loginApiTest.cy.js
support/
commands.js
e2e.js
cypress.config.js

El directorio e2e contiene el archivo 'loginApiTest.js' que tiene el código de prueba.

El directorio support contiene cualquier archivo JavaScript que permita al usuario crear comandos personalizados. Estos archivos no se utilizan en este proyecto.

Ejecución de pruebas
Para ejecutar las pruebas, navegue hasta el directorio del proyecto en la terminal y ejecute el siguiente comando:

npx cypress open
Este comando abrirá el Cypress Test Runner, que le permite ejecutar pruebas individuales.

También puede ejecutar las pruebas en la línea de comandos utilizando el siguiente comando:

npx cypress run
Este comando ejecutará todas las pruebas en el directorio de integración en modo headless.