const knex = require("../db/connection");

const tableName = "objects"

function create(data) {
    return knex(tableName).insert({ data }, "*");
}

module.exports = {
    create,
};
