module.exports = (sequelize, Sequelize) => {
    const Emp = sequelize.define("empresas", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      }
    });
  
    return Emp;
  };