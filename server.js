const express = require('express');
const mysql = require('./database');

const app = express();

//je définie le port sur lequel va se créer mon serveur
const PORT = process.env.PORT || 8000;

// j'affiche dans ma console le port pour valider

app.listen(PORT, () => {
    console.log('Server app listening on port ' + PORT);
});

mysql.connect((err)=>{
    if(!err)
    console.log('DB connect');
    else
    console.log('DB not connect \n Error : ' + JSON.stringify(err, undefined, 2));
})

