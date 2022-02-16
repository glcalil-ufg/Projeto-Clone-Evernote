require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.database,
      user:     process.env.user_database,
      password: process.env.password_database
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