const {getEmpresas}= require('../controllers/empresas.controller');

module.exports = function(app) {
app.get("/empresas",getEmpresas);
}