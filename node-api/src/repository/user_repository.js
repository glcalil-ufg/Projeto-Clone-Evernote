const knex = require('../config/database');
const bcrypt = require('bcrypt');

module.exports = user_rep = {
   async selectUser(login){
        try {
            return await knex('users').select({id: 'id',nome: 'nome', email: 'email'}).where('login','=',login);
        } catch (error) {
            return 'Algo deu errado';
        }
   },
   async insertUser(dados){
        try {
            password = await bcrypt.hash(dados['senha'],10);
            result = await knex('users').insert({nome: dados['nome'], email: dados['email'], senha: password, login: dados['login']})
            return result['rowCount']
        } catch (error) {
            return {error:'algo deu errado'};
        }
   },
   async updateUser(dados,login){
        try {
            result = await knex('users').update(dados).where('id',login)
            return result['rowCount']
        } catch (error) {
            return 'algo deu errado';
        }
   },
   async updateUserPassword(word,login){
        try {
            password = await bcrypt.hash(word,10);
            result = await knex('users').update({senha: password}).where('login',login);
            return result['rowCount']
        } catch (error) {
            return 'algo deu errado';
        }
    },
    async comparePassword(dados){
        try {
            password = await knex('users').select('senha').where('login',dados['login'])
            if(password == '') return false;
            return await bcrypt.compare(dados['senha'],password[0]['senha']);
            
        } catch (error) {
            return false;
        }
    },
   async customSelect(coluns = {id: 'id', login: 'login'},params = 'id, >, 0',order = 'id'){
        try {
            return await knex('users').select(coluns).where(params).orderBy(order);
        } catch (error) {
            return false
        }
   }
}