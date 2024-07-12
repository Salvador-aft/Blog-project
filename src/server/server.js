const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Agrega esta línea para manejar el cuerpo de la solicitud POST
const db = require('../DbServer');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use(express.static('public')); 

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

// Configuración de rutas
const articlesRouter = require('../routes/articles');
app.use('/api', articlesRouter); // Las rutas relacionadas con los artículos estarán bajo /api