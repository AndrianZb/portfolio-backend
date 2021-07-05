const knex = require("../db/connection");

const tableName = "forms"

function create(data) {
    return knex(tableName).insert({ data }, "*");
}

module.exports = {
    create,
};