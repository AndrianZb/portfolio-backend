const knex = require("../db/connection");

const tableName = "submissions"

function create(data) {
    return knex(tableName).insert({ data }, "*");
}

module.exports = {
    create,
};
