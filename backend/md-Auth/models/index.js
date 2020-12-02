const config = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host : config.HOST,
        dialect : config.dialect,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire : config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require ("../models/user.model")(sequelize,Sequelize);
db.role = require ("../models/role.model")(sequelize,Sequelize);
db.emp = require ("../models/empresas.model")(sequelize,Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
  });
  db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
  }); 
  db.user.belongsToMany(db.emp, {
    through: "user_emp",
    foreignKey: "userId",
    otherKey: "empId"
  });
  db.emp.belongsToMany(db.user, {
    through: "user_emp",
    foreignKey: "empId",
    otherKey: "userId"
  });
  
  db.ROLES = ["user", "admin", "moderator"];
  
  module.exports = db;