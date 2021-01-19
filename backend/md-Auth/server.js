const express = require ("express");
const bodyparser = require("body-parser");
const cors = require("cors");

var morgan = require('morgan')
var util = require('util');


const app = express();
const db = require("./models");
const { Console } = require("console");

var corsOptions = {
    origin:"http://localhost:8081"
};

app.use(cors(corsOptions));
//Formato peticiones
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

//Datos Base de Datos
db.sequelize.sync( res =>{
  if (res) 
  {
    Console.log('Conectado a la base de Datos')
  }else{
    Console.log('Error en la conexion a la base de datos')
  }
});



//Datos Rutas
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/empresas.routes')(app);

app.get("/",(req,res)=>{
    console.log(util.inspect(res));
    console.log(util.inspect(req));
    res.json({message: "Bienvenido al Auth para MO."});
});

//seteamos el puerto de escucha
const PORT = process.env.PORT || 8080;
app.listen (PORT,()=>{
    console.log(`App ejecutandose en el puerto ${PORT}.`);
});



    
  

