const user = require('../repository/user_repository.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.jwt_token;

module.exports = {
    async getDadosUser(dados){
        let {login} = dados;
        return await user.selectUser(login);
    },

    async getByLogin(dados){
        return await user.customSelect({nome:'nome',id:'id'},{login:dados['login']})
    },

    async registerUser(dados){
        return await user.insertUser(dados);
    },

    async changeUser(dados,dadosUser){
        let {login} = dadosUser
        return await user.updateUser(dados,login);
    },

    async changeUserPassword(password,login){
        return await user.updateUserPassword(password,login);
    },

    async loginUser(dados){
        resposta = await user.comparePassword(dados);
        if(resposta){
            const token = jwt.sign({login:dados['login']},secret, {expiresIn: '2h'})
            return {login:dados['login'],token:token}
        }else {
           return 'Usuário ou senha invalidos' 
        }
    },

    verifyUser(dados){
        const token = dados['x-acess-token'];
        if(!token){
            console.log('não a token de acesso');
            return false;
        }else {
            return jwt.verify(token,secret, (err,decode) =>{
                if(err){
                    return false
                }else {
                    return {'login': decode.login}
                }
            })
        }
    }
}