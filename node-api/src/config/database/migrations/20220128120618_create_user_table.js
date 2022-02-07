
exports.up = knex => knex.schema().createTable('users', table => {
    table.increments('id')
    table.text('nome').notNullable()
    table.text('email').unique().notNullable()
    table.text('senha').notNullable()
    table.text('login').unique().notNullable()
    table.timestamp('data_criacao').defaultTo(knex.fn.now())
    table.timestamp('data_alteracao').defaultTo(knex.fn.now())
  
});

exports.down = knex => knex.schema.dropTable('users');
