/*import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/sistema");
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error);
    }
    
};
*/
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('sistema', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos MySQL');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

export default sequelize;