const note = require('../repository/notes_repository');
const { verifyUser } = require('./user_business');
const user = require('./user_business');

module.exports = {
    async getAll(id,token){
        if(user.verifyUser(token))retorno = await note.selectAll(id);
        else retorno = 'Acesso negado'
        return retorno;
    },
    async insereNota(dados,token){
        if(user.verifyUser(token))retorno = await note.insert(dados);
        else retorno = 'Acesso negado'
        return retorno;
    },
    async atualizaNota(dados,token){
        if(user.verifyUser(token))retorno = await note.update(dados);
        else retorno = 'Acesso negado'
        return retorno;
    },
    async getNote(id,token){
        let login = user.verifyUser(token)
        if(login){
            let nota = await note.selectNote(id);
            let usuario = await user.getByLogin(login);
            retorno = {'nota':nota, usuario}
        }else {
            retorno = 'Acesso invalido'
        }
       
        return retorno;
    },
}