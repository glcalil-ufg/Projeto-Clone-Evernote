const express = require('express');
const user = require('../business/user_business');

const router = express.Router();

router.get('/',(req,res ) => {
    if(dados = user.verifyUser(req.headers)){
        user.getDadosUser(dados).then(resposta =>{
            res.json(resposta);
        })
    }else {
        res.json({'Erro': 'Acesso Negado'})
    }
});

router.post('/register',(req,res ) => {
    let {dados} = req.body;
    user.registerUser(dados).then(resposta =>{
        res.json(resposta); 
    })
});

router.post('/update',(req,res ) => {
    if(dadosUser = user.verifyUser(req.headers)){
            let {dados} = req.body;
            user.changeUser(dados,dadosUser).then(resposta =>{
            res.json(resposta); 
        })
    } else res.json({'Error':'Acesso Negado'});
});

router.post('/update-password',(req,res ) => {
    if(user.verifyUser(req.headers)){
        let {id} = req.query;
        let {dados} = req.body;
        user.changeUserPassword(dados['senha'],id).then(resposta =>{
            res.json(resposta); 
        })
    } else res.json({'Error':'Acesso Negado'});
});

router.post('/login',(req,res ) => {
    let {dados} = req.body;
    user.loginUser(dados).then(resposta =>{
        res.json(resposta); 
    })
});

module.exports = router;