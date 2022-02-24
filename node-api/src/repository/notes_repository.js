const knex = require('../config/database');

module.exports = {
    async selectAll(user){
        try {
            let retorno = await knex('notes').select({titulo : 'titulo',id:'id',data:'data_criacao'}).where('user_id','=',user);
            return retorno;
        } catch (error) {
            return 'Falha ao buscar lista de notas';
        }
    },
    async insert(dados){
        try {
            let retorno = await knex('notes').insert({titulo: dados['titulo'], corpo: dados['corpo'],user_id: dados['id']});
            return retorno['rowCount'];
        } catch (error) {
            return 'Falha inserir nota';
        }
    },
    async update(dados){
        try {
            let retorno = await knex('notes').update({titulo: dados['titulo'], corpo: dados['corpo']}).where("id",'=',dados['id']);
            return retorno['rowCount'];
        } catch (error) {
            return 'Falha atualizar nota';
        }
    },
    async selectNote(id){
        try {
            retorno = await knex('notes').select({titulo: 'titulo', corpo: 'corpo',id:'user_id'}).where('id','=',id);
            return retorno;
        } catch (error) {
            return 'Falha buscar nota';
        }
    },
}