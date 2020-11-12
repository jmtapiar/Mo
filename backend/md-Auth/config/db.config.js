module.exports = {
    HOST:"192.168.1.3",
    USER:"medinub",
    PASSWORD:"123456*",
    DB:"medinub",
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000

    }
};
