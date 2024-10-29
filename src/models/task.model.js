import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import User from './user.model.js';

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  userId: {  // Definimos explícitamente la columna userId
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
});

// Definir relación
Task.belongsTo(User, {
  foreignKey: 'userId',  // Usamos la misma clave foránea que definimos arriba
  as: 'user'  // Alias para la relación
});

export default Task;