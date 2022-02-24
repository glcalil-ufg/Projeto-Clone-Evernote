const note = require('../repository/notes_repository');
const user = require('./user_business');

module.exports = {
    async getAll(token){
        if(login = user.verifyUser(token)){
            let usuario = await user.getByLogin(login);
            retorno = await note.selectAll(usuario[0]['id']);
        }else retorno = 'Acesso negado'
        return retorno;
    },
    async insereNota(dados,token){
        if(login = user.verifyUser(token)){
            usuario = await user.getByLogin(login);
            dados['id'] = usuario[0]['id']
            retorno = await note.insert(dados);
        } else retorno = 'Acesso negado'
        return retorno;
    },
    async atualizaNota(dados,token){
        if(user.verifyUser(token)){
            retorno = await note.update(dados);
        }else retorno = 'Acesso negado'
        return retorno;
    },
    async getNote(id,token){
        let login = user.verifyUser(token)
        if(login){
            let nota = await note.selectNote(id);
            let usuario = await user.getByLogin(login);
            nota[0]['autor'] = usuario[0]['nome']
            return nota
        }else {
            return'Acesso invalido'
        }
    },
}