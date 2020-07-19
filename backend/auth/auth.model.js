const mysql = require('mysql');
const properties = require('../config/properties');
const connection = mysql.createConnection({
    host     : properties.host,
    user     : properties.user,
    password : properties.password,
    database : properties.database
  });

  connection.connect((err) => {

    if(!err)
        console.log('Database is connected!');
    else
        console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
    });