'use stric'
//exportamos rutas
const authRoutes = require('./auth/auth.routes')

const express = require ('express');
const app = express();
const router = express.Router();



app.listen(3000, ()=>console.log('Server Runnig on port 3000'));

