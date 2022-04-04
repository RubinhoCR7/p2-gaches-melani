const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    database: 'rubenbd',
    user: 'root',
    password: '',
    port: '3306'
});

module.exports = mysqlConnection;