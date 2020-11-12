const express = require ("express");
const bodyparser = require("body-parser");
const cors = require("cors");

var morgan = require('morgan')
var util = require('util');


const app = express();
const db = require("./models");

var corsOptions = {
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));
db.sequelize.sync();
// const Role = db.role;
// db.sequelize.sync({force: true}).then(() => {
//     console.log('Drop and Resync Db');
//     initial();
//   });

// function initial() {
//     Role.create({
//       id: 1,
//       name: "user"
//     });
   
//     Role.create({
//       id: 2,
//       name: "moderator"
//     });
   
//     Role.create({
//       id: 3,
//       name: "admin"
//     });
//   }

 // Will give you more details than console.log
app.use(morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '-',
      tokens['response-time'](req, res), 'ms'
    ].join(' ')
  }))
app.use (bodyparser.json());

app.use(bodyparser.urlencoded({extended: true}));

//Ruta simple
app.get("/",(req,res)=>{
    console.log(util.in                                                                                                                                                                                                                                                                                          spect(res));
    res.json({message: "Bienvenido al Auth para MO."});
});
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//seteamos el puerto de escucha
const PORT = process.env.PORT || 8080;
app.listen (PORT,()=>{
    console.log(`App ejecutandose en el puerto ${PORT}.`);
});



    
  

