const { Sequelize, DataTypes } = require('sequelize');

const databaseUri = process.env['DATABASE_URI'];
const sequelize = new Sequelize(databaseUri); 

const Task = sequelize.define('Task', {
  title: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN
  }
}, {
});

// El método sync hace que cuando levanto la API se cree o modifique la tabla si no matchea con los atributos:
// https://sequelize.org/master/manual/model-basics.html#model-synchronization 
Task.sync({ alter: true }); 

module.exports = {
  Task
};
