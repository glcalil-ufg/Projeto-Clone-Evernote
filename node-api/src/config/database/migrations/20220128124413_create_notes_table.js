
exports.up = knex => knex.schema().createTable('notes', table => {
    table.increments('id')
    table.text('titulo').notNullable()
    table.text('corpo')
    table.integer('user_id').notNullable()
    table.timestamp('data_criacao').defaultTo(knex.fn.now())
    table.timestamp('data_alteracao').defaultTo(knex.fn.now())
    table.foreign('user_id').references('users.id')
  
});


exports.down = function(knex) {
  
};
