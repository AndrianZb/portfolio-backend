const knex = require("../db/connection");

const tableName = "images"

function create(data) {
    return knex(tableName).insert({ data }, "*");
}

module.exports = {
    create,
};
