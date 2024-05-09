const express = require('express');
const userRoutes = require('./routes/userRoute'); // Importa las rutas de userRoutes.js
const config = require('./config.json');
const {manejoErrores} = require('./middlewares/manejoErrores'); 

const app = express();

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Middleware de manejo de errores global
app.use(manejoErrores);

// Usar las rutas definidas en userRoutes.js
app.use('/octi', userRoutes); // Prefijo '/octi' para todas las rutas de userRoutes.js

const PORT = (config.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
