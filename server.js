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

// je fais une requête get pour récupérer ce qu'il y a dans ma table

app.get('/', (req, res) => {
    mysql.query('SELECT * FROM rubentable', (err, rows) => {
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})

// je veux faire une recherche sur un user en particulier

app.get('/user/:id', (req, res) => {
    mysql.query('SELECT * FROM rubentable WHERE id = ?', [req.params.id], (err, rows) => {
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})

// veux supprimer un user en particulier

app.delete('/user/:id', (req, res) => {
    mysql.query('DELETE FROM rubentable WHERE id = ?', [req.params.id], (err, rows) => {
        if(!err)
        res.send('delete reussi');
        else
        console.log(err);
    })
})
