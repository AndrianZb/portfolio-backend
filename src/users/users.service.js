const knex = require("../db/connection");

const tableName = "users"

function create(data) {
    return knex(tableName).insert({ data }, "*");
}

module.exports = {
    create,
};
