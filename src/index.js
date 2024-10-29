import app from './app.js';
import { connectDB } from './db.js';
import sequelize from './db.js';
import './models/user.model.js';  // Importa primero el modelo de Usuario
import './models/task.model.js';  // Luego el modelo de Tarea

async function startServer() {
    try {
        await connectDB();
        // Sincroniza los modelos con la base de datos
        await sequelize.sync({ force: true }); // Usa force:true solo durante desarrollo
        app.listen(4000);
        console.log('Servidor corriendo en el puerto', 4000);
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
}

startServer();