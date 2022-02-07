module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'Knex_EverNote',
      user:     'postgress',
      password: 'asdf1234'
    },
    migrations: {
        table_name: 'knex_migrations',
        directory: `${__dirname}/src/config/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/config/database/seeds`
  }
  },

}