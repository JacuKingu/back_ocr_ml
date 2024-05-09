const express = require('express');
const userRoutes = require('./routes/userRoute'); // Importa las rutas de userRoutes.js
const config = require('./config.json');

const app = express();

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Usar las rutas definidas en userRoutes.js
app.use('/octi', userRoutes); // Prefijo '/api' para todas las rutas de userRoutes.js

const PORT = (config.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
