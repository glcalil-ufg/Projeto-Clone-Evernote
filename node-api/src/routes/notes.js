const express = require('express');
const nota = require('../business/note_business');

const router = express.Router();

router.get('/nota',(req,res) => {
    let token = req.headers
    let {id} = req.query;
    nota.getNote(id,token).then(nota => {
        res.json(nota);
    });
});

router.get('/:id',(req,res) => {
    let token = req.headers
    let {id} = req.params
    nota.getAll(id,token).then(listaNotas => {
        res.json(listaNotas);
    });
});

router.post('/save-note',(req,res) =>{
    let token = req.headers
    let {dados} = req.body;
    nota.insereNota(dados,token).then(resposta => {
        res.json(resposta);
    });
});

router.post('/update-note',(req,res) =>{
    let token = req.headers
    let {dados} = req.body;
    nota.atualizaNota(dados,token).then(resposta => {
        res.json(resposta);
    });
});

module.exports = router;