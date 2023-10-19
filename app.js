const express = require('express');
const sequelize = require('sequelize');
const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
const db = new sequelize(market,mauricior,MrcLfm5126, {
    host: 'localhost',
    dialect: 'postgres',
});

// Importa los modelos
const { Articulo, Ticket } = require('./models');

// Configurar las rutas
app.use(express.json());
app.use('/articulos', require('./routes/articulos'));
app.use('/tickets', require('./routes/tickets'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${port}`);
});
