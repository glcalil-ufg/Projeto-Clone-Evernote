const user = require('../repository/user_repository.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.jwt_token;

module.exports = {
    async getAll() {
        return await user.selectAllUsers(); 
    },

    async registerUser(dados){
        return await user.insertUser(dados);
    },

    async changeUser(dados,id){
        return await user.updateUser(dados,id);
    },

    async changeUserPassword(password,id){
        return await user.updateUserPassword(password,id);
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

    async getById(dados){
        return await user.customSelect({nome:'nome'},{id:dados['id']})
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
                    console.log(decode.login);
                    return true
                }
            })
        }

    }
}