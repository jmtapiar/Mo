const mysql = require  ('mysql');
const authSchema = require ('./auth.model');

authSchema.statics ={
    create: function (data,cb) {
        const user = new this (data);
        user.save(cb);
    },
    loguin: function (query,cb) {
        this.find (query,cb);
    }
}

const authModel = mysql.createConnection('users',authSchema);
module.exports = authModel;