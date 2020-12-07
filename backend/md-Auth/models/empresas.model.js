
module.exports = (sequelize, Sequelize) => {
    const Emp = sequelize.define("empresas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      ci: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      activo:{
        type: Sequelize.INTEGER
      },
      fingreso:{
        type: Sequelize.DATE
      },
      fsalida:{
        type: Sequelize.DATE
      }
    });
  
    return Emp;
  };