const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Emp = db.emp;
var util = require('util');


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { emp } = require("../models");

exports.signup = (req, res) => {
  console.log(util.inspect(req.body));
  // Save User to Database
  Emp.findOne({
    where: {
      id: req.body.emp
    }
  }).then (idemp =>{
    console.log("Empresa del Requerimiento: " + req.body.emp);
    console.log(util.inspect(idemp));
    if (idemp!=''){
      console.log("Entro en el IF");
      if (req.body.emp != '' && req.body.password != '') {
    
        User.create({
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8),
          emp: req.body.emp
        })
          .then(user => {
            Emp.findOne({
              where: {
                id: req.body.emp
              }
            }).then(emp => {
              if (emp) {
                user.setEmpresas(emp).then(() => {
                });
                console.log("Entra coloca empresas");
                if (req.body.roles) {
                  Role.findOne({
                    where: {
                      name: {
                        [Op.or]: req.body.roles
                      }
                    }
                  }).then(roles => {
                    user.setRoles(roles).then(() => {
                      res.send({ message: "User was registered successfully!" });
                    });
                  }).catch(err => {
                    res.status(500).send({ message: err.message });
                  });
                } else {
                  // user role = 1
                  user.setRoles([1]).then(() => {
                    res.send({ message: "User was registered successfully!" });
                  });
                };
              }
              else {
                res.status(500).send({ message: "No existe la Empresa.." });
              }
            }).catch(err => {
              res.status(500).send({ message: err.message });
            });
    
          });
      } else {
        res.status(500).send({ message: "Completar todos los campos ..." });
      };
    }
  }).catch(err =>{
    res.status(500).send({ message: err.message });
  });
};

exports.signin = (req, res) => {
  console.log("Respuesta SingIn. ")
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 10800 // 3 hours
      });

      var authorities = [];
      user.get
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};