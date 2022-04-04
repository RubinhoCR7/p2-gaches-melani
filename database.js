const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    database: 'rubenbd',
    user: 'root',
    password: '',
    port: '3306'
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connect');
    else
    console.log('DB not connect \n Error : ' + JSON.stringify(err, undefined, 2));
})

module.exports = mysqlConnection;