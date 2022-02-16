const knex = require('../config/database');

module.exports = user = {
    async getAll(){
        retorno = await knex('users').select({nome: 'nome', email: 'email', login: 'login'});
        return retorno;
    },
    async insert(dados){
        await knex('users').insert({nome: dados['nome'], email: dados['email'], login: dados['login']});
    } 
}