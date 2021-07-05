const knex = require("../db/connection");

const tableName = "pages"

function create(data) {
    return knex(tableName).insert({ data }, "*");
}

module.exports = {
    create,
};
