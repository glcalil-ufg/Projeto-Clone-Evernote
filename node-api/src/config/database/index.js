const knexfile = require("../../../knexfile");

module.exports = knex = require('knex')(knexfile['development']);