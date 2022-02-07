/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {nome: 'Admin',email: 'admin@admin.com', senha: 'provisória',login: 'admin'},
        
      ]);
    });
};
