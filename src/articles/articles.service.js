const knex = require("../db/connection");

const tableName = "articles"

function create(data) {
    return knex(tableName).insert({ data }, "*");
}

module.exports = {
    create,
};
