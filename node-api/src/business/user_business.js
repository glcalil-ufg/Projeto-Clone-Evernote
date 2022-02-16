const user = require('../repository/user_repository.js');

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
        return await user.comparePassword(dados);
    }
}